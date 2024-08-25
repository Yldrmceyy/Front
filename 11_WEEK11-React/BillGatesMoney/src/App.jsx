import { useState } from 'react';
import Balance from './components/Balance/Balance.jsx';
import ProductCard from './components/ProductCard/productCard.jsx';
import "./App.css";

function App() {
  const [balance, setBalance] = useState(100000000000);
  const [products, setProducts] = useState([
    { name: 'Skyscraper', price: 850000000, img:'../public/image/air-jordans.jpg' ,quantity: 0 },
    { name: 'Cruise Ship', price: 930000000, quantity: 0 },
    { name: 'NBA Team', price: 2120000000, quantity: 0 },
    // Diğer ürünleri burada tanımlayabilirsin
  ]);

  const handleBuy = (product) => {
    if (balance >= product.price) {
      setBalance(balance - product.price);
      setProducts(products.map(p =>
        p.name === product.name ? { ...p, quantity: p.quantity + 1 } : p
      ));
    }
  };

  const handleSell = (product) => {
    if (product.quantity > 0) {
      setBalance(balance + product.price);
      setProducts(products.map(p =>
        p.name === product.name ? { ...p, quantity: p.quantity - 1 } : p
      ));
    }
  };

  return (
    <div className="App">
      <Balance balance={balance} />
      <div className="product-list">
        {products.map(product => (
          <ProductCard
            key={product.name}
            product={{ ...product, balance }}
            onBuy={handleBuy}
            onSell={handleSell}
          />
        ))}
      </div>
      <Receipt products={products} />
    </div>
  );
}

export default App;
