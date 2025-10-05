# Multi-stage build for frontend
FROM node:18-alpine AS frontend-build

WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# Backend stage
FROM node:18-alpine AS backend

WORKDIR /app
COPY backend/package*.json ./
RUN npm install --only=production

COPY backend/ ./
COPY --from=frontend-build /app/frontend/dist ./public

EXPOSE 4000

CMD ["npm", "start"]