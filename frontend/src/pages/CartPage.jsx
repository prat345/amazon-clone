import React, { useContext } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { Helmet } from "react-helmet-async";
import { Store } from "../Store";
import MessageBox from "../components/MessageBox";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { Link, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import axios from "axios";

const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100;

export default function CartPage() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state; // get cartItems

  const updateCartHandler = async (item, quantity) => {
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert("Product out of stock");
      return;
    }
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
  };

  const removeItemHandler = (item) => {
    ctxDispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };

  const checkOutHandler = () => {
    navigate("/signin?redirect=/shipping");
  };
  return (
    <div className="container py-2">
      <Helmet>
        <title>Cart</title>
      </Helmet>
      <h1 className="my-3">Shopping Cart</h1>
      <Row>
        <Col md={8} className="mb-3">
          {/* if cart is empty > show msg else show items */}
          {cartItems.length === 0 ? (
            <MessageBox>
              Cart is empty. <Link to="/">Go Shopping</Link>
            </MessageBox>
          ) : (
            <ListGroup>
              {cartItems.map((item) => (
                <ListGroup.Item key={item._id}>
                  <Row>
                    <Col xs={4}>
                      <div className="thumbnail-container">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="img-fluid rounded img-thumbnail"
                        ></img>
                      </div>
                    </Col>
                    <Col xs={8}>
                      <Row>
                        <Col>
                          <p>
                            <Link
                              className="product-name my-auto"
                              to={`/product/${item.slug}`}
                            >
                              {item.name}
                            </Link>
                          </p>
                          <p>${(item.price * item.quantity).toFixed(2)}</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Button
                            variant="light"
                            onClick={() =>
                              updateCartHandler(item, item.quantity - 1)
                            }
                            disabled={item.quantity === 1}
                          >
                            <i className="fas fa-minus-circle"></i>
                          </Button>{" "}
                          <span>{item.quantity}</span>{" "}
                          <Button
                            variant="light"
                            onClick={() =>
                              updateCartHandler(item, item.quantity + 1)
                            }
                            disabled={item.quantity === item.countInStock}
                          >
                            <i className="fas fa-plus-circle"></i>
                          </Button>{" "}
                          <Button
                            variant="light"
                            onClick={() => removeItemHandler(item)}
                          >
                            <i className="fas fa-trash"></i>
                          </Button>{" "}
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h5 className="mb-2">
                    Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{" "}
                    items):
                  </h5>{" "}
                  <h3>
                    $
                    {round2(
                      cartItems.reduce((a, c) => a + c.price * c.quantity, 0)
                    )}
                  </h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="d-grid">
                    <Button
                      type="button"
                      variant="primary"
                      onClick={() => checkOutHandler()}
                      disabled={cartItems.length === 0}
                    >
                      Checkout
                    </Button>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
