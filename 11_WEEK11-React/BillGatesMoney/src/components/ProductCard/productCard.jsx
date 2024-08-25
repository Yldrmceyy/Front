

function ProductCard({ product, onBuy, onSell }) {
  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>${product.price.toLocaleString()}</p>
      <button 
        onClick={() => onSell(product)} 
        disabled={product.quantity === 0}>
        Sell
      </button>
      <input type="number" value={product.quantity} readOnly />
      <button 
        onClick={() => onBuy(product)} 
        disabled={product.price > product.balance}>
        Buy
      </button>
    </div>
  );
}

export default ProductCard;
