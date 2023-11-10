import "./App.css";
import HomePage from "./pages/HomePage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">amazon</Link>
          <Link to="/product">product</Link>
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
