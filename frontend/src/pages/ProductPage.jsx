import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import LoadingBox from "../components/LoadingBox";
import MesssageBox from "../components/MessageBox";
import { Helmet } from "react-helmet-async";
import { getError } from "../utils";
import ProductDetail from "../components/ProductDetail";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, product: action.payload };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function ProductPage() {
  const params = useParams();
  const { slug } = params;

  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" }); // dispatch(action)
      try {
        const result = await axios.get(`/api/products/slug/${slug}`); // send ajax req to backend
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: getError(err) });
      }
      // setProducts(result.data);
    };
    fetchData();
  }, [slug]);

  return loading ? (
    // <div>Loading...</div>
    <LoadingBox />
  ) : error ? (
    // <div>{error}</div>
    <MesssageBox variant="danger">{error}</MesssageBox>
  ) : (
    <div>
      {/* <h1>{product.name}</h1> */}
      {/* Change page title */}
      <Helmet>
        <title>{product.name}</title>
      </Helmet>
      <ProductDetail product={product} />
    </div>
  );
}
