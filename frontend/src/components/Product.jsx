import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Rating from "./Rating";
import { Store } from "../Store";
import axios from "axios";
import { toast } from "react-toastify";

// product display in HomePage
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
    <Card key={product.slug}>
      <Link to={`product/${product.slug}`}>
        <img src={product.image} alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        <Card.Text>${product.price}</Card.Text>

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
