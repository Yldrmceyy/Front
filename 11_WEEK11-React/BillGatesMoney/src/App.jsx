import { useState } from "react";
import ProductCard from "./components/ProductCard/productCard";
import Balance from "./components/Balance/Balance";
import Receipt from "./components/Receipt/Receipt";
import "./App.css";

function App() {
  const [balance, setBalance] = useState(100000000000);
  const [products, setProducts] = useState([
    {
      img: "../public/image/big-mac.jpg",
      name: "Big Mac",
      price: 2,
      quantity: 0,
    },
    {
      img: "../public/image/flip-flops.jpg",
      name: "Flip Flops",
      price: 3,
      quantity: 0,
    },
    {
      img: "../public/image/coca-cola-pack.jpg",
      name: "Coca-Cola Pack",
      price: 5,
      quantity: 0,
    },
    {
      img: "../public/image/movie-ticket.jpg",
      name: "Movie Ticket",
      price: 12,
      quantity: 0,
    },
    { img: "../public/image/book.jpg", name: "Book", price: 15, quantity: 0 },
    {
      img: "../public/image/lobster-dinner.jpg",
      name: "Lobster Dinner",
      price: 45,
      quantity: 0,
    },
    {
      img: "../public/image/video-game.jpg",
      name: "Video Game",
      price: 60,
      quantity: 0,
    },
    {
      img: "../public/image/amazon-echo.jpg",
      name: "Amazon Echo",
      price: 99,
      quantity: 0,
    },
    {
      img: "../public/image/year-of-netflix.jpg",
      name: "Year of Netflix",
      price: 100,
      quantity: 0,
    },
    {
      img: "../public/image/air-jordans.jpg",
      name: "Air Jordans",
      price: 125,
      quantity: 0,
    },
    {
      img: "../public/image/airpods.jpg",
      name: "Airpods",
      price: 199,
      quantity: 0,
    },
    {
      img: "../public/image/gaming-console.jpg",
      name: "Gaming Console",
      price: 299,
      quantity: 0,
    },
    {
      img: "../public/image/mona-lisa.jpg",
      name: "Mona Lisa",
      price: 780000000,
      quantity: 0,
    },
    {
      img: "../public/image/mansion.jpg",
      name: "Mansion",
      price: 450000000,
      quantity: 0,
    },
    {
      img: "../public/image/nba-team.jpg",
      name: "NBA Team",
      price: 2120000000,
      quantity: 0,
    },
  ]);

  const handleBuy = (product) => {
    if (balance >= product.price) {
      const newProducts = products.map((p) =>
        p.name === product.name ? { ...p, quantity: p.quantity + 1 } : p
      );
      setProducts(newProducts);
      setBalance(balance - product.price);
    }
  };

  const handleSell = (product) => {
    if (product.quantity > 0) {
      const newProducts = products.map((p) =>
        p.name === product.name ? { ...p, quantity: p.quantity - 1 } : p
      );
      setProducts(newProducts);
      setBalance(balance + product.price);
    }
  };

  return (
    <div className="App">
      <div className="Header">
        <h1>Spend Bill Gates' Money</h1>
        <img src="../public/image/billgates.jpg" />
      </div>
      <Balance balance={balance} />
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.name}
            product={{ ...product }}
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
