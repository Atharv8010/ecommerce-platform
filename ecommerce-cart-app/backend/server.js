const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Mock Products Data (5-10 items as per requirement) - Prices in Indian Rupees
const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop'
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 8999,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop'
  },
  {
    id: 3,
    name: 'Laptop Stand',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop'
  },
  {
    id: 4,
    name: 'Mechanical Keyboard',
    price: 4999,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop'
  },
  {
    id: 5,
    name: 'USB-C Hub',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=400&fit=crop'
  },
  {
    id: 6,
    name: 'Wireless Mouse',
    price: 999,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop'
  },
  {
    id: 7,
    name: 'Phone Case',
    price: 599,
    image: 'https://images.unsplash.com/photo-1585789575166-c6e8f1875c7d?w=400&h=400&fit=crop'
  },
  {
    id: 8,
    name: 'Portable Charger',
    price: 1799,
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop'
  }
];

// In-memory cart storage
let cart = [];
let cartIdCounter = 1;

// API Routes

// GET /api/products - Get all products (5-10 mock items)
app.get('/api/products', (req, res) => {
  try {
    res.status(200).json({
      success: true,
      data: products
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch products',
      error: error.message
    });
  }
});

// POST /api/cart - Add item to cart {productId, qty}
app.post('/api/cart', (req, res) => {
  try {
    const { productId, qty } = req.body;

    // Validation
    if (!productId || !qty) {
      return res.status(400).json({
        success: false,
        message: 'Product ID and quantity are required'
      });
    }

    if (qty <= 0) {
      return res.status(400).json({
        success: false,
        message: 'Quantity must be greater than 0'
      });
    }

    // Find product
    const product = products.find(p => p.id === productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    // Check if item already exists in cart
    const existingItem = cart.find(item => item.productId === productId);

    if (existingItem) {
      // Update quantity
      existingItem.qty += qty;
      return res.status(200).json({
        success: true,
        message: 'Cart updated successfully',
        data: cart
      });
    }

    // Add new item to cart
    const cartItem = {
      id: cartIdCounter++,
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: qty
    };

    cart.push(cartItem);

    res.status(201).json({
      success: true,
      message: 'Item added to cart',
      data: cart
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to add item to cart',
      error: error.message
    });
  }
});

// GET /api/cart - Get cart + total
app.get('/api/cart', (req, res) => {
  try {
    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    res.status(200).json({
      success: true,
      data: {
        items: cart,
        total: parseFloat(total.toFixed(2))
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch cart',
      error: error.message
    });
  }
});

// DELETE /api/cart/:id - Remove item
app.delete('/api/cart/:id', (req, res) => {
  try {
    const itemId = parseInt(req.params.id);

    const itemIndex = cart.findIndex(item => item.id === itemId);

    if (itemIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Item not found in cart'
      });
    }

    cart.splice(itemIndex, 1);

    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    res.status(200).json({
      success: true,
      message: 'Item removed from cart',
      data: {
        items: cart,
        total: parseFloat(total.toFixed(2))
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to remove item',
      error: error.message
    });
  }
});

// POST /api/checkout - Process checkout {cartItems} → mock receipt
app.post('/api/checkout', (req, res) => {
  try {
    const { cartItems, name, email } = req.body;

    // Validation
    if (!cartItems || cartItems.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Cart is empty'
      });
    }

    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: 'Name and email are required'
      });
    }

    // Calculate total
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);

    // Generate mock receipt
    const receipt = {
      orderId: `ORD${Date.now()}`,
      customerName: name,
      customerEmail: email,
      items: cartItems,
      total: parseFloat(total.toFixed(2)),
      timestamp: new Date().toISOString(),
      status: 'Confirmed'
    };

    // Clear cart after successful checkout
    cart = [];

    res.status(200).json({
      success: true,
      message: 'Order placed successfully',
      data: receipt
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Checkout failed',
      error: error.message
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: err.message
  });
});

// Start server
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
  console.log(` API endpoints available at http://localhost:${PORT}/api`);
});