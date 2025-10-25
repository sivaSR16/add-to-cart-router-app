import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

export default function App() {
  const [cart, setCart] = React.useState([]);

  return (
    <Router>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow p-4 flex justify-between">
        <Link to="/" className="font-semibold hover:text-blue-600">
          🛍️ Products
        </Link>
        <Link to="/cart" className="font-semibold hover:text-blue-600">
          Cart ({cart.length})
        </Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<ProductPage cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
      </Routes>
    </Router>
  );
}
