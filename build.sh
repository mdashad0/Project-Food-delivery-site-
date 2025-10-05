#!/bin/bash

# Install and build frontend
echo "Installing frontend dependencies..."
cd frontend
npm install --include=dev
echo "Building frontend..."
npm run build
cd ..

echo "Build completed successfully!"