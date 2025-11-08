import './Receipt.css';

function Receipt({ receipt, onClose }) {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="receipt-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className="receipt-header">
          <div className="success-checkmark">
            <div className="check-icon">
              <span className="icon-line line-tip"></span>
              <span className="icon-line line-long"></span>
              <div className="icon-circle"></div>
              <div className="icon-fix"></div>
            </div>
          </div>
          <h2>Order Confirmed!</h2>
          <p>Thank you for your purchase</p>
        </div>

        <div className="receipt-body">
          <div className="receipt-info">
            <div className="info-row">
              <span className="info-label">Order ID:</span>
              <span className="info-value">{receipt.orderId}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Date:</span>
              <span className="info-value">{formatDate(receipt.timestamp)}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Status:</span>
              <span className="status-badge">{receipt.status}</span>
            </div>
          </div>

          <div className="customer-info">
            <h3>Customer Details</h3>
            <p><strong>Name:</strong> {receipt.customerName}</p>
            <p><strong>Email:</strong> {receipt.customerEmail}</p>
          </div>

          <div className="order-items">
            <h3>Order Items</h3>
            {receipt.items.map((item, index) => (
              <div key={index} className="order-item">
                <div className="item-info">
                  <span className="item-name">{item.name}</span>
                  <span className="item-qty">× {item.qty}</span>
                </div>
                <span className="item-price">₹{(item.price * item.qty).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="receipt-total">
            <span className="total-label">Total Amount</span>
            <span className="total-value">₹{receipt.total}</span>
          </div>
        </div>

        <button className="btn-continue" onClick={onClose}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default Receipt;