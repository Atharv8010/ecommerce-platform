import './ProductList.css';

function ProductList({ products, onAddToCart, loading }) {
  return (
    <section className="products-section">
      <h2 className="section-title">Featured Products</h2>
      
      {products.length === 0 ? (
        <div className="products-loading">
          <p>Loading products...</p>
        </div>
      ) : (
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              
              <div className="product-content">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">₹{product.price.toFixed(2)}</p>
                
                <button
                  className="btn-add-to-cart"
                  onClick={() => onAddToCart(product.id)}
                  disabled={loading}
                >
                  {loading ? 'Adding...' : 'Add to Cart'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default ProductList;