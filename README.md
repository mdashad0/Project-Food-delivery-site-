# Food Delivery ApplicationWork in Process


A full-stack food delivery application built with React.js, Node.js, Express.js, and MongoDB.

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

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

For support, email support@fooddelivery.com or join our Slack channel.