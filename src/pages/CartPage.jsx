export default function CartPage({ cart, setCart }) {
  const increaseQty = (id) =>
    setCart(cart.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item));

  const decreaseQty = (id) =>
    setCart(cart.map(item => 
      item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
    ));

  const removeItem = (id) =>
    setCart(cart.filter(item => item.id !== id));

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = total * 0.1;
  const finalPrice = total - discount;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? <p>No items in cart</p> : (
        <div className="space-y-4">
          {cart.map(item => (
            <div key={item.id} className="flex justify-between items-center border-b pb-2">
              <span>{item.title}</span>
              <div className="flex items-center gap-2">
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => increaseQty(item.id)}>+</button>
                <span>${(item.price * item.qty).toFixed(2)}</span>
                <button className="text-red-600" onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="pt-4">
            <p>Total: ${total.toFixed(2)}</p>
            <p>Discount (10%): -${discount.toFixed(2)}</p>
            <p className="font-bold">Final Price: ${finalPrice.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
}
