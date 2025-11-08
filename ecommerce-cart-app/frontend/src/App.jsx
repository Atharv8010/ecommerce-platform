import { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import CheckoutForm from './components/CheckoutForm';
import Receipt from './components/Receipt';
import './App.css';

const API_BASE_URL = 'http://localhost:5000/api';

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [showCheckout, setShowCheckout] = useState(false);
  const [receipt, setReceipt] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  // Fetch all products
  const fetchProducts = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/products`);
      const data = await response.json();
      
      if (data.success) {
        setProducts(data.data);
      } else {
        setError('Failed to load products');
      }
    } catch (err) {
      setError('Error connecting to server');
      console.error('Error fetching products:', err);
    }
  };

  // Fetch cart data
  const fetchCart = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/cart`);
      const data = await response.json();
      
      if (data.success) {
        setCartItems(data.data.items);
        setCartTotal(data.data.total);
      }
    } catch (err) {
      console.error('Error fetching cart:', err);
    }
  };

  // Add product to cart
  const handleAddToCart = async (productId) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/cart`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId, qty: 1 }),
      });

      const data = await response.json();

      if (data.success) {
        await fetchCart();
        alert('✅ Item added to cart!');
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Failed to add item to cart');
      console.error('Error adding to cart:', err);
    } finally {
      setLoading(false);
    }
  };

  // Remove item from cart
  const handleRemoveFromCart = async (itemId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/cart/${itemId}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (data.success) {
        setCartItems(data.data.items);
        setCartTotal(data.data.total);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Failed to remove item');
      console.error('Error removing from cart:', err);
    }
  };

  // Update item quantity
  const handleUpdateQuantity = (itemId, newQty) => {
    if (newQty < 1) return;

    const updatedCart = cartItems.map(item =>
      item.id === itemId ? { ...item, qty: newQty } : item
    );

    setCartItems(updatedCart);

    const newTotal = updatedCart.reduce((sum, item) => sum + item.price * item.qty, 0);
    setCartTotal(parseFloat(newTotal.toFixed(2)));
  };

  // Handle checkout
  const handleCheckout = async (customerData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cartItems,
          name: customerData.name,
          email: customerData.email,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setReceipt(data.data);
        setShowCheckout(false);
        setCartItems([]);
        setCartTotal(0);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Checkout failed. Please try again.');
      console.error('Error during checkout:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="app-header">
        <div className="container">
          <h1 className="app-title">🛍️ Vibe Commerce</h1>
          <div className="cart-summary">
            <span className="cart-count">{cartItems.length}</span>
            <span>Cart</span>
          </div>
        </div>
      </header>

      {/* Error Message */}
      {error && (
        <div className="error-banner">
          <p>{error}</p>
          <button onClick={() => setError(null)}>✕</button>
        </div>
      )}

      {/* Main Content */}
      <main className="app-main">
        <div className="container">
          <div className="layout">
            {/* Products Section */}
            <ProductList
              products={products}
              onAddToCart={handleAddToCart}
              loading={loading}
            />

            {/* Cart Sidebar */}
            <Cart
              items={cartItems}
              total={cartTotal}
              onRemove={handleRemoveFromCart}
              onUpdateQty={handleUpdateQuantity}
              onCheckout={() => setShowCheckout(true)}
            />
          </div>
        </div>
      </main>

      {/* Checkout Modal */}
      {showCheckout && (
        <CheckoutForm
          onSubmit={handleCheckout}
          onClose={() => setShowCheckout(false)}
          loading={loading}
        />
      )}

      {/* Receipt Modal */}
      {receipt && (
        <Receipt receipt={receipt} onClose={() => setReceipt(null)} />
      )}
    </div>
  );
}

export default App;