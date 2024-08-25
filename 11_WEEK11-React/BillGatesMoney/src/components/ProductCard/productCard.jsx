import "./ProductCard.css";
import React from "react";

function ProductCard({ product, onBuy, onSell }) {
  return (
    <div className="product-card">
      <img src={product.img} alt="product.name" />
      <h2>{product.name}</h2>
      <p>${product.price.toLocaleString()}</p>

      <div className="row">
        <button
          onClick={() => onSell(product)}
          disabled={product.quantity === 0}
        >
          Sell
        </button>

        <input type="number" value={product.quantity} readOnly />

        <button
          onClick={() => onBuy(product)}
          disabled={product.price > product.balance}
        >
          Buy
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
