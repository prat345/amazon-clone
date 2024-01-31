import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Rating from "./Rating";
import { Store } from "../Store";
import axios from "axios";
import { toast } from "react-toastify";

// show each product in HomePage
export default function Product(props) {
  const { product } = props;
  const { state, dispatch: ctxDispatch } = useContext(Store); // import from Store
  const {
    cart: { cartItems },
  } = state; // get cartItems

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id); // return item if in cart or return null
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      toast.warn("Product out of stock");
      return;
    }
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
    // navigate("/cart");
  };
  return (
    <Card key={product.slug} className="h-100">
      <Link to={`product/${product.slug}`}>
        <div className="img-container text-center">
          <img src={product.image} alt={product.name} />
        </div>
      </Link>
      <Card.Body>
        <Link className="product-name" to={`product/${product.slug}`}>
          <Card.Text className="text-2xl">{product.name}</Card.Text>
        </Link>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        <Card.Text>
          <span className="product-price">
            <span>$</span>
            <span className="text-large">{product.price}</span>
          </span>
        </Card.Text>

        {product.countInStock === 0 ? (
          <Button variant="light" disabled>
            Out of Stock
          </Button>
        ) : (
          <Button onClick={() => addToCartHandler(product)}>Add to cart</Button>
        )}
      </Card.Body>
    </Card>
  );
}
