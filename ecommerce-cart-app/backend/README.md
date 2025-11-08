# E-Commerce Backend API

Backend REST API for the Vibe Commerce shopping cart application built with Node.js and Express.

## 🚀 Setup & Installation

```bash
cd backend
npm install
```

## 📦 Dependencies

- `express` - Web framework
- `cors` - Enable CORS
- `nodemon` - Development server (dev dependency)

## ▶️ Running the Server

### Development Mode (with auto-reload)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

Server runs on: **http://localhost:5000**

## 📡 API Endpoints

### 1. GET /api/products
Get all products (5-10 mock items)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Wireless Headphones",
      "price": 79.99,
      "image": "..."
    }
  ]
}
```

### 2. POST /api/cart
Add item to cart

**Request Body:**
```json
{
  "productId": 1,
  "qty": 1
}
```

**Response:**
```json
{
  "success": true,
  "message": "Item added to cart",
  "data": [...]
}
```

### 3. GET /api/cart
Get cart items + total

**Response:**
```json
{
  "success": true,
  "data": {
    "items": [...],
    "total": 129.98
  }
}
```

### 4. DELETE /api/cart/:id
Remove item from cart

**Response:**
```json
{
  "success": true,
  "message": "Item removed from cart",
  "data": {
    "items": [...],
    "total": 79.99
  }
}
```

### 5. POST /api/checkout
Process checkout and generate mock receipt

**Request Body:**
```json
{
  "cartItems": [...],
  "name": "John Doe",
  "email": "john@example.com"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Order placed successfully",
  "data": {
    "orderId": "ORD1234567890",
    "customerName": "John Doe",
    "customerEmail": "john@example.com",
    "items": [...],
    "total": 129.98,
    "timestamp": "2024-11-08T...",
    "status": "Confirmed"
  }
}
```

## 🔧 Features

- ✅ RESTful API design
- ✅ In-memory data storage
- ✅ CORS enabled
- ✅ Error handling
- ✅ Input validation
- ✅ Mock receipt generation

## 📝 Notes

- Data is stored in-memory (resets on server restart)
- No database required for this mock implementation
- All responses follow consistent JSON structure