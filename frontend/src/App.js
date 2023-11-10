import "./App.css";
import data from "./data.js";

function App() {
  return (
    <div>
      <header>
        <a href="/">amazon</a>
        <a href="/product">product</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        <div className="product-container">
          {data.product.map((product) => (
            <div className="product">
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
