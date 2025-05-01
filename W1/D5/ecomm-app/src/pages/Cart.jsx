import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, removeFromCart } from "../redux/cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cart
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="border p-4 rounded flex justify-between items-center"
            >
              <div className="flex gap-4 items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h2 className="font-medium">{item.title}</h2>
                  <p>${item.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => dispatch(decrement(item.id))}
                  className="px-2"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => dispatch(increment(item.id))}
                  className="px-2"
                >
                  +
                </button>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="ml-4 text-red-500"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
          <div className="text-right font-bold text-lg">Total: ${total}</div>
        </div>
      )}
    </div>
  );
}

export default Cart;
