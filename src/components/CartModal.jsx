import Modal from "react-modal";

Modal.setAppElement("#root");

export default function CartModal({ isOpen, onClose, cart, removeFromCart }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="p-6 max-w-lg mx-auto bg-white rounded shadow mt-20">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} className="flex justify-between items-center border-b py-2">
              <span>{item.title}</span>
              <button 
                onClick={() => removeFromCart(item.id)} 
                className="text-red-600 hover:underline">
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      <button 
        onClick={onClose} 
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
        Close
      </button>
    </Modal>
  );
}
