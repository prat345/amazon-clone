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
            <div className="product" key={product.slug}>
              <a href={`product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </a>
              <div className="product-info">
                <a href={`product/${product.slug}`}>
                  <p>{product.name}</p>
                </a>
                <p>${product.price}</p>
                <button>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
