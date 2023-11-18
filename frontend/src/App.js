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
import Container from "react-bootstrap/Container";
import { useContext, useEffect, useState } from "react";
import { Store } from "./Store.js";
import CartPage from "./pages/CartPage.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShippingAddressPage from "./pages/ShippingAddressPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import PaymentMethodPage from "./pages/PaymentMethodPage.jsx";
import PlaceOrderPage from "./pages/PlaceOrderPage.jsx";
import OrderPage from "./pages/OrderPage.jsx";
import OrderHistoryPage from "./pages/OrderHistoryPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import axios from "axios";
import { getError } from "./utils.js";
import SearchPage from "./pages/SearchPage.jsx";
import NavbarSite from "./components/NavbarSite.jsx";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="bottom-center" limit={1} />
      <header>
        <NavbarSite />
      </header>

      <main>
        <Container className="mt-3">
          <Routes>
            <Route exact path="/" element={<SearchPage />} />
            <Route path="/product/:slug" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/shipping" element={<ShippingAddressPage />} />
            <Route path="/payment" element={<PaymentMethodPage />} />
            <Route path="/placeorder" element={<PlaceOrderPage />} />
            <Route path="/order/:id" element={<OrderPage />} />
            <Route path="/orderhistory" element={<OrderHistoryPage />} />
          </Routes>
        </Container>
      </main>
      <footer className="mt-5">
        <div className="text-center">All rights reserved</div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
