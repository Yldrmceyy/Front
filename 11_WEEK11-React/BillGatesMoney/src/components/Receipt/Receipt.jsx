import React from "react";
import "./Receipt.css";

function Receipt({ products }) {
  const total = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  return (
    <div className="receipt">
      <h2>Your Receipt</h2>
      <ul>
        {products.map((product) =>
          product.quantity > 0 ? (
            <li key={product.name}>
              {product.name} x{product.quantity} - $
              {(product.price * product.quantity).toLocaleString()}
            </li>
          ) : null
        )}
      </ul>
      <h3>Total: ${total.toLocaleString()}</h3>
    </div>
  );
}

export default Receipt;
