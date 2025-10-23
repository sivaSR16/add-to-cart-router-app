import ProductCard from "../components/ProductCard";

export default function ProductPage({ products, cart, setCart }) {
  const addToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      setCart(cart.filter(item => item.id !== product.id)); // remove if already exists
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
          inCart={!!cart.find(i => i.id === product.id)}
        />
      ))}
    </div>
  );
}
