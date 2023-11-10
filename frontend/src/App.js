import "./App.css";
import HomePage from "./pages/HomePage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import data from "./data.js";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">amazon</Link>
          <a href="/product">product</a>
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/product/:slug" element={<ProductPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
