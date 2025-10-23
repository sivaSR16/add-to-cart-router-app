import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartModal from "./components/CartModal";

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  const addToCart = (product) => {
    if (cart.find(item => item.id === product.id)) {
      alert("Item already added to the cart");
    } else {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar cartCount={cart.length} onCartClick={() => setIsModalOpen(true)} />
      <ProductList products={products} addToCart={addToCart} />
      <CartModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        cart={cart} 
        removeFromCart={removeFromCart}
      />
    </div>
  );
}
