import './Cart.css';

function Cart({ items, total, onRemove, onUpdateQty, onCheckout }) {
  return (
    <aside className="cart-sidebar">
      <div className="cart-header">
        <h2 className="cart-title">Shopping Cart</h2>
        <span className="cart-items-count">{items.length} items</span>
      </div>

      {items.length === 0 ? (
        <div className="cart-empty">
          <div className="empty-icon">🛒</div>
          <p>Your cart is empty</p>
          <span>Add some products to get started!</span>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {items.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
                
                <div className="cart-item-details">
                  <h4 className="cart-item-name">{item.name}</h4>
                  <p className="cart-item-price">₹{item.price.toFixed(2)}</p>

                  <div className="quantity-control">
                    <button
                      className="qty-btn"
                      onClick={() => onUpdateQty(item.id, item.qty - 1)}
                      disabled={item.qty <= 1}
                    >
                      −
                    </button>
                    <span className="qty-display">{item.qty}</span>
                    <button
                      className="qty-btn"
                      onClick={() => onUpdateQty(item.id, item.qty + 1)}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="btn-remove"
                    onClick={() => onRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-footer">
            <div className="cart-total">
              <span className="total-label">Total:</span>
              <span className="total-amount">₹{total.toFixed(2)}</span>
            </div>

            <button className="btn-checkout" onClick={onCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </aside>
  );
}

export default Cart;