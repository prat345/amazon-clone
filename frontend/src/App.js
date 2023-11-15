import "./App.css";
import HomePage from "./pages/HomePage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import Badge from "react-bootstrap/Badge";
import { useContext } from "react";
import { Store } from "./Store.js";
import CartPage from "./pages/CartPage.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import NavDropdown from "react-bootstrap/NavDropdown";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShippingAddressPage from "./pages/ShippingAddressPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import PaymentMethodPage from "./pages/PaymentMethodPage.jsx";
import PlaceOrderPage from "./pages/PlaceOrderPage.jsx";

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signOutHandler = () => {
    ctxDispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
    localStorage.removeItem("shippingAddress");
    localStorage.removeItem("paymentMethod");
  };

  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <ToastContainer position="bottom-center" limit={1} />
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Amazon</Navbar.Brand>
              </LinkContainer>
              <Nav className="me-auto">
                <Link to="/cart" className="nav-link">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {/* {cart.cartItems.length} */}
                      {cart.cartItems.reduce(
                        (accumulator, current) =>
                          accumulator + current.quantity,
                        0
                      )}
                    </Badge>
                  )}
                </Link>
                {userInfo ? (
                  <NavDropdown title={userInfo.name}>
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>User Profile</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/orderhistory">
                      <NavDropdown.Item>Order History</NavDropdown.Item>
                    </LinkContainer>
                    <Link
                      className="dropdown-item"
                      to="#signout"
                      onClick={signOutHandler}
                    >
                      Sign Out
                    </Link>
                  </NavDropdown>
                ) : (
                  <Link className="nav-link" to="/signin">
                    Sign In
                  </Link>
                )}
              </Nav>
            </Container>
          </Navbar>
          {/* <Link to="/">amazon</Link>
              <Link to="/product">product</Link> */}
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/product/:slug" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/shipping" element={<ShippingAddressPage />} />
              <Route path="/payment" element={<PaymentMethodPage />} />
              <Route path="/placeorder" element={<PlaceOrderPage />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
