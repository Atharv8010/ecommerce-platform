# 🛍️ Vibe Commerce - Full Stack E-Commerce Cart

A complete MERN stack e-commerce shopping cart application with a clean, modern UI built using plain CSS.

##  Features

- ✅ Full-stack MERN application (MongoDB-ready, Express, React, Node.js)
- ✅ Product catalog with 5-10 mock items
- ✅ Shopping cart functionality (add/remove/update quantity)
- ✅ Real-time total calculation
- ✅ Checkout process with form validation
- ✅ Order confirmation with mock receipt
- ✅ Responsive design for all devices
- ✅ Clean UI with plain CSS (no frameworks)
- ✅ REST API with proper error handling

##  Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **Nodemon** - Development server

### Frontend
- **React** - UI library
- **Vite** - Build tool
- **Plain CSS** - Styling (no frameworks)

##  Project Structure

```
ecommerce-cart-app/
│
├── backend/
│   ├── server.js              # Express server & API routes
│   ├── package.json
│   └── README.md
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ProductList.jsx      # Product grid
│   │   │   ├── ProductList.css
│   │   │   ├── Cart.jsx             # Shopping cart
│   │   │   ├── Cart.css
│   │   │   ├── CheckoutForm.jsx     # Checkout modal
│   │   │   ├── CheckoutForm.css
│   │   │   ├── Receipt.jsx          # Order receipt
│   │   │   └── Receipt.css
│   │   ├── App.jsx                  # Main app
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
│
└── README.md                  # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation & Running

#### 1. Clone the repository
```bash
git clone <repository-url>
cd ecommerce-cart-app
```

#### 2. Setup Backend
```bash
cd backend
npm install
npm run dev
```
Backend runs on: **http://localhost:5000**

#### 3. Setup Frontend (in a new terminal)
```bash
cd frontend
npm install
npm run dev
```
Frontend runs on: **http://localhost:3000**

#### 4. Open your browser
Navigate to: **http://localhost:3000**

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products (5-10 mock items) |
| POST | `/api/cart` | Add item to cart `{productId, qty}` |
| GET | `/api/cart` | Get cart items + total |
| DELETE | `/api/cart/:id` | Remove item from cart |
| POST | `/api/checkout` | Process checkout → mock receipt |

## 🎨 UI Components

### 1. **Product List**
- Displays products in a responsive grid
- Each product has an image, name, price, and "Add to Cart" button
- Clean card design with hover effects

### 2. **Shopping Cart**
- Sticky sidebar on desktop
- Shows all cart items with images
- Quantity controls (increase/decrease)
- Remove item functionality
- Real-time total calculation
- Checkout button

### 3. **Checkout Form**
- Modal overlay
- Name and email validation
- Professional form design
- Submit to complete purchase

### 4. **Order Receipt**
- Animated success checkmark
- Order confirmation details
- Order ID, timestamp, customer info
- Itemized list of purchased items
- Total amount
- "Continue Shopping" button

## 🎯 Assignment Requirements ✅

### Backend APIs:
- ✅ GET `/api/products` → return 5–10 mock products (id, name, price, image)
- ✅ POST `/api/cart` → add item {productId, qty}
- ✅ DELETE `/api/cart/:id` → remove item by id
- ✅ GET `/api/cart` → return all cart items and total price
- ✅ POST `/api/checkout` → receive {cartItems} and return mock receipt {total, timestamp}
- ✅ Basic error handling
- ✅ CORS enabled for frontend access
- ✅ Nodemon for development

### Frontend (React):
- ✅ Vite + React functional components
- ✅ ProductList → grid of products with "Add to Cart" buttons
- ✅ Cart → cart items with quantity, total, remove/update buttons
- ✅ CheckoutForm → input name and email, show receipt modal on submit
- ✅ Responsive layout using plain CSS Grid/Flexbox
- ✅ Alert/modal on successful checkout
- ✅ All data fetched from backend API (no hardcoded items)
- ✅ Minimal, clean UI with NO frameworks (no Tailwind, no Bootstrap)
- ✅ Separate CSS files for all components

## 🔧 Key Features

### Backend
- RESTful API design
- In-memory data storage (easily replaceable with MongoDB)
- Proper error handling and validation
- Mock receipt generation with order ID and timestamp

### Frontend
- Clean, modern UI design
- Smooth animations and transitions
- Form validation
- Loading states
- Error handling
- Fully responsive (mobile, tablet, desktop)
- Professional color scheme
- Intuitive user experience

## 📱 Responsive Design

The application is fully responsive and works seamlessly on:
- 📱 Mobile devices (< 768px)
- 📱 Tablets (768px - 1024px)
- 💻 Desktops (> 1024px)

## 🛠️ Development

### Backend Development
```bash
cd backend
npm run dev  # Runs with nodemon (auto-reload)
```

### Frontend Development
```bash
cd frontend
npm run dev  # Runs Vite dev server with HMR
```


## 📝 Notes

- **In-memory storage**: Cart data resets when backend server restarts
- **No authentication**: This is a mock e-commerce demo
- **No real payments**: Checkout process generates a mock receipt only
- **MongoDB-ready**: Easy to integrate with MongoDB by replacing in-memory storage

## 🎓 Learning Objectives Met

✅ Full-stack development (MERN)  
✅ REST API design  
✅ React component architecture  
✅ State management with hooks  
✅ Form validation  
✅ Responsive CSS design  
✅ Error handling  
✅ Professional UI/UX  


