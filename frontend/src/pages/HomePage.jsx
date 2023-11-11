import React, { useEffect, useReducer, useState } from "react";
import data from "../data";
import { Link } from "react-router-dom";
import axios from "axios";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, products: action.payload };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function HomePage() {
  // const [products, setProducts] = useState([]);
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" }); // dispatch(action)
      try {
        const result = await axios.get("/api/products"); // send ajax req to backend
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
      // setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="product-container">
        {products.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={`product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <Link to={`product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p>${product.price}</p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
