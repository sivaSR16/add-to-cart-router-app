export default function ProductCard({ product, addToCart, inCart }) {
  return (
    <div className="bg-white rounded shadow p-4 flex flex-col">
      <img src={product.image} className="h-40 object-contain mb-4" />
      <h2 className="font-bold text-sm mb-2">{product.title}</h2>
      <p className="text-blue-600 font-semibold">${product.price}</p>
      <button 
        onClick={() => addToCart(product)} 
        className="mt-auto bg-blue-600 text-white px-4 py-2 rounded">
        {inCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
}
