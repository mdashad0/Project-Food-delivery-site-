# Food Delivery Application:

A full-stack food delivery application built with React.js, Node.js, Express.js, and MongoDB..

## 📱 Application Screenshots:

### 🏠 Homepage:
<div align="center">
<img src="https://image2url.com/images/1760192057831-02f3a3eb-39a9-43f5-9d88-62f30899e82e.png" alt="Homepage" width="800"/>
</div>

*Order your favourite food with an attractive hero section and easy navigation*

### 🍽️ Menu & Food Categories:
<div align="center">
<img src="https://image2url.com/images/1760192128100-499c7cf4-b047-4948-97af-a8224b5ff9dd.png" alt="Menu Categories" width="800"/>
</div>

*Explore our diverse menu featuring 8 different food categories: Salad, Rolls, Deserts, Sandwich, Cake, Pure Veg, Pasta, and Noodles*

### 🌟 Top Dishes:
<div align="center">
<img src="https://image2url.com/images/1760192210046-07d03807-9d7e-491f-907b-edf4d8b6e427.png" alt="Top Dishes" width="800"/>
</div>

*Discover top dishes near you with star ratings, descriptions, and competitive pricing*

### 🛒 Shopping Cart:
<div align="center">
<img src="https://image2url.com/images/1760192273553-37d58d7a-2066-4c36-bd93-c9fc67288055.png" alt="Shopping Cart" width="800"/>
</div>

*Manage your order with detailed cart view showing items, quantities, pricing, and promo code support*

### 📱 Mobile App Section & 📞 Footer & Contact:
<div align="center">
<img src="https://image2url.com/images/1760192319148-1e7703bc-78f0-4c18-9d13-d8b5171bb112.png" alt="App Download" width="800"/>
</div>

*Download our mobile app from Google Play Store and App Store for a better experience*
*Complete footer with company information, navigation links, and contact details*

## ✨ Key Features Showcased:

### 🎨 Modern UI/UX Design
- Clean and intuitive interface with orange/red color scheme
- Responsive design that works on all devices
- Professional food photography and appealing layouts

### 🍕 Comprehensive Menu System.
- **8 Food Categories**: Salad, Rolls, Desserts, Sandwich, Cake, Pure Veg, Pasta, Noodles
- **Detailed Food Items**: Each dish includes rating, description, and pricing
- **Visual Appeal**: High-quality food images for every item

### 🛍️ Smart Shopping Cart
- Real-time cart updates with quantity management
- Subtotal, delivery fee, and total calculations
- Promo code support for discounts
- Easy item removal and modification

### 📱 Mobile App Integration
- Cross-platform availability (iOS & Android)
- Seamless app store integration
- Consistent branding across web and mobile

### 🏢 Professional Branding
- "Tomato" brand identity with consistent styling
- Complete contact information and social media links
- Professional footer with company details and policies

## Features

- **Frontend**: React.js with modern UI/UX
- **Backend**: Node.js with Express.js REST API
- **Database**: MongoDB with Mongoose ODM
- **Payment**: Stripe integration for secure payments
- **Admin Panel**: Order management and status tracking
- **Authentication**: JWT-based user authentication
- **File Upload**: Image upload for food items

## Project Structure

```
food-del/
├── frontend/          # React.js frontend application
├── backend/           # Node.js/Express.js backend API
├── admin/            # Admin panel for order management
└── README.md
```

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MongoDB database
- Stripe account for payment processing

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment variables:
   ```bash
   cp .env.example .env
   ```

4. Edit `.env` file with your configuration:
   ```
   MONGO_URI=mongodb://localhost:27017/food-delivery
   STRIPE_SECRET_KEY=your_stripe_secret_key_here
   JWT_SECRET=your_jwt_secret_here
   PORT=4000
   ```

5. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Admin Panel Setup

1. Navigate to the admin directory:
   ```bash
   cd admin
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the admin panel:
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login

### Orders
- `POST /api/order/place` - Place new order
- `POST /api/order/verify` - Verify payment
- `POST /api/order/userorders` - Get user orders
- `GET /api/order/list` - Get all orders (admin)
- `POST /api/order/status` - Update order status (admin)

### Food Items
- `POST /api/food/add` - Add food item (admin)
- `GET /api/food/list` - Get all food items
- `POST /api/food/remove` - Remove food item (admin)

## Technologies Used

### Frontend
- React.js
- React Router
- Context API
- Axios
- React Toastify

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Bcrypt
- Multer
- Stripe

### Development Tools
- Vite (Build tool)
- ESLint (Linting)
- CORS (Cross-origin requests)

## Environment Variables

Create a `.env` file in the backend directory with the following variables:

```
MONGO_URI=your_mongodb_connection_string
STRIPE_SECRET_KEY=your_stripe_secret_key
JWT_SECRET=your_jwt_secret_key
PORT=4000
```

## Deployment

### Deploy to Render

This project is configured for easy deployment to Render.com:

#### Option 1: Static Site + Web Service (Recommended)

1. **Deploy Frontend (Static Site)**:
   - Connect your GitHub repository to Render
   - Create a new Static Site
   - Set build command: `cd frontend && npm install && npm run build`
   - Set publish directory: `frontend/dist`

2. **Deploy Backend (Web Service)**:
   - Create a new Web Service
   - Set build command: `cd backend && npm install`
   - Set start command: `cd backend && npm start`
   - Add environment variables in Render dashboard

#### Option 2: Single Web Service

1. Connect repository to Render
2. Use build command: `npm run build`
3. Use start command: `npm start`
4. Set environment variables in Render dashboard

#### Environment Variables for Production

Set these in your Render dashboard:

```
MONGO_URI=your_mongodb_atlas_connection_string
STRIPE_SECRET_KEY=your_stripe_secret_key
JWT_SECRET=your_jwt_secret_key
NODE_ENV=production
PORT=10000
```

### Deploy with Docker

```bash
# Build the image
docker build -t food-delivery-app .

# Run the container
docker run -p 4000:4000 \
  -e MONGO_URI=your_mongodb_uri \
  -e STRIPE_SECRET_KEY=your_stripe_key \
  -e JWT_SECRET=your_jwt_secret \
  food-delivery-app
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


