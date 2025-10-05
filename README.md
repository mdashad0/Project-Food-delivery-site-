# 🍅 Tomato - Food Delivery Platform

A comprehensive full-stack food delivery application built with modern web technologies. This platform provides a seamless experience for customers to browse restaurants, place orders, and track deliveries, while offering robust admin tools for restaurant management.

## 🚀 Features

### 🛍️ Customer Features
- **User Authentication** - Secure login/registration system with JWT
- **Restaurant Browse** - Explore various restaurants and cuisines
- **Menu Display** - View detailed food items with images and descriptions
- **Shopping Cart** - Add/remove items with quantity management
- **Order Placement** - Streamlined checkout process
- **Payment Integration** - Secure payments via Stripe
- **Order Tracking** - Real-time order status updates
- **Order History** - View past orders and reorder functionality

### 👨‍💼 Admin Features
- **Dashboard** - Comprehensive admin panel
- **Menu Management** - Add, edit, and remove food items
- **Order Management** - View and update order statuses
- **Image Upload** - Food item image management
- **Analytics** - Order tracking and insights

### 📱 Responsive Design
- Mobile-first approach
- Cross-platform compatibility
- Modern UI/UX design

## 🛠️ Tech Stack

### Frontend
- **React.js** - User interface framework
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **React Context** - State management
- **CSS3** - Modern styling with responsive design

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication tokens
- **Multer** - File upload handling
- **Stripe** - Payment processing

### Admin Panel
- **React.js** - Dedicated admin interface
- **React Router** - Navigation
- **React Toastify** - Notifications
- **Axios** - API integration

## 📁 Project Structure

```
food-delivery-platform/
├── frontend/               # Customer-facing React app
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React Context providers
│   │   └── assets/        # Images and static files
├── backend/               # Node.js/Express server
│   ├── controller/        # Route controllers
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   ├── middleware/       # Custom middleware
│   └── uploads/          # File storage
└── admin/                # Admin panel React app
    ├── src/
    │   ├── components/   # Admin UI components
    │   ├── pages/       # Admin pages
    └── assets/          # Admin assets
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mdashad0/Project-Food-delivery-site-.git
   cd Project-Food-delivery-site-
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Admin Panel Setup**
   ```bash
   cd ../admin
   npm install
   ```

### Environment Configuration

Create a `.env` file in the backend directory:

```env
JWT_SECRET=your_jwt_secret_here
STRIPE_SECRET_KEY=your_stripe_secret_key_here
MONGODB_URI=your_mongodb_connection_string
PORT=4000
```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   npm run server
   ```

2. **Start the Frontend**
   ```bash
   cd frontend
   npm run dev
   ```

3. **Start the Admin Panel**
   ```bash
   cd admin
   npm run dev
   ```

### Default URLs
- **Frontend**: http://localhost:5173
- **Admin Panel**: http://localhost:5174
- **Backend API**: http://localhost:4000

## 📚 API Documentation

### Authentication Endpoints
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login

### Food Endpoints
- `GET /api/food/list` - Get all food items
- `POST /api/food/add` - Add new food item (Admin)
- `POST /api/food/remove` - Remove food item (Admin)

### Order Endpoints
- `POST /api/order/place` - Place new order
- `POST /api/order/verify` - Verify payment
- `POST /api/order/userorders` - Get user orders
- `GET /api/order/list` - Get all orders (Admin)
- `POST /api/order/status` - Update order status (Admin)

### Cart Endpoints
- `POST /api/cart/add` - Add item to cart
- `POST /api/cart/remove` - Remove item from cart
- `POST /api/cart/get` - Get cart items

## 🔧 Configuration

### Database Schema

**User Model**
```javascript
{
  name: String,
  email: String,
  password: String,
  cartData: Object
}
```

**Food Model**
```javascript
{
  name: String,
  description: String,
  price: Number,
  image: String,
  category: String
}
```

**Order Model**
```javascript
{
  userId: String,
  items: Array,
  amount: Number,
  address: Object,
  status: String,
  date: Date,
  payment: Boolean
}
```

## 🎨 Screenshots

### Customer Interface
- Modern, intuitive design
- Responsive layout for all devices
- Easy navigation and ordering process

### Admin Dashboard
- Comprehensive order management
- Food item management with image upload
- Real-time order status updates

## 🔒 Security Features

- **JWT Authentication** - Secure user sessions
- **Password Hashing** - Bcrypt encryption
- **Input Validation** - Server-side validation
- **File Upload Security** - Safe image handling
- **Environment Variables** - Secure configuration management

## 🚀 Deployment

### Recommended Platforms
- **Frontend/Admin**: Vercel, Netlify
- **Backend**: Heroku, Railway, DigitalOcean
- **Database**: MongoDB Atlas

### Environment Variables for Production
```env
NODE_ENV=production
JWT_SECRET=your_production_jwt_secret
STRIPE_SECRET_KEY=your_production_stripe_key
MONGODB_URI=your_production_mongodb_uri
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Md Ashad**
- GitHub: [@mdashad0](https://github.com/mdashad0)
- Email: mdashad@tomato.com

## 🙏 Acknowledgments

- React.js community for excellent documentation
- Stripe for payment integration
- MongoDB for database solutions
- All contributors and testers

## 📞 Support

For support, email mdashad@tomato.com or create an issue in the GitHub repository.

---

⭐ Star this repository if you found it helpful!