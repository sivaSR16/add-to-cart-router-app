export default function CartPage({ cart, setCart }) {
  const increaseQty = (id) =>
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );

  const decreaseQty = (id) =>
    setCart(
      cart.map((item) =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );

  const removeItem = (id) =>
    setCart(cart.filter((item) => item.id !== id));

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = total * 0.1;
  const finalPrice = total - discount;

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">No items in cart</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b pb-3"
            >
              <span className="font-medium">{item.title}</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <span className="px-3">{item.qty}</span>
                <button
                  onClick={() => increaseQty(item.id)}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
                <span className="ml-4 font-semibold">
                  ${(item.price * item.qty).toFixed(2)}
                </span>
                <button
                  className="ml-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Totals Section */}
          <div className="pt-6 text-right border-t mt-4">
            <p>
              Total: <span className="font-medium">${total.toFixed(2)}</span>
            </p>
            <p className="text-green-600">
              Discount (10%): -${discount.toFixed(2)}
            </p>
            <p className="text-2xl font-bold">
              Final Price: ${finalPrice.toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
