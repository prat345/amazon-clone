import React from "react";
import data from "../data";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="product-container">
        {data.product.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={`product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
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
    </div>
  );
}
