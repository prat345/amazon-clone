import React, { useContext } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import Rating from "../components/Rating";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { Store } from "../Store";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function ProductDetail(props) {
  const navigate = useNavigate();
  const { product } = props;
  const { state, dispatch: ctxDispatch } = useContext(Store); // import from Store
  const { cart } = state;

  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find((x) => x._id === product._id); // return item if in cart or return null
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      toast.warn("Product out of stock");
      return;
    }
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...product, quantity },
    });
    navigate("/cart");
  };
  return (
    <Row>
      <Col md={4} className="text-center">
        <img className="img-large" src={product.image} alt={product.name}></img>
      </Col>
      <Col md={5} className="mb-3">
        <ListGroup variant="flush">
          <ListGroup.Item>
            <h1>{product.name}</h1>
          </ListGroup.Item>
          <ListGroup.Item>
            <Rating
              rating={product.rating}
              numReviews={product.numReviews}
            ></Rating>
          </ListGroup.Item>
          <ListGroup.Item>
            <span className="product-price">
              <span>$</span>
              <span class="text-large">{product.price}</span>
            </span>
          </ListGroup.Item>
          <ListGroup.Item>
            <Container className="mt-2">
              <Row className="mb-1">
                <Col xs={4}>
                  <strong>Brand</strong>
                </Col>
                <Col xs={8}>{product.brand}</Col>
              </Row>
              <Row className="mb-1">
                <Col xs={4}>
                  <strong>Category</strong>
                </Col>
                <Col xs={8}>{product.category}</Col>
              </Row>
            </Container>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>About this item</strong>
            <div>{product.description}</div>
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col md={3}>
        <Card>
          <Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>${product.price}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? (
                      <Badge bg="success">
                        {product.countInStock} In Stock
                      </Badge>
                    ) : (
                      <Badge bg="danger">Out of Stock</Badge>
                    )}
                  </Col>
                </Row>
              </ListGroup.Item>

              {product.countInStock > 0 && (
                <ListGroup.Item>
                  <div className="d-grid">
                    <Button onClick={addToCartHandler} variant="primary">
                      Add to cart
                    </Button>
                  </div>
                </ListGroup.Item>
              )}
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default ProductDetail;
