import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function Wishlist({ wishlist, toggleWishlist }) {
  const dispatch = useDispatch();
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>No items in wishlist.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {wishlist.map((item) => (
            <div key={item.id} className="border p-4 rounded shadow">
              <img
                src={item.image}
                alt={item.title}
                className="h-32 mx-auto object-contain mb-2"
              />
              <h2 className="text-sm font-semibold">{item.title}</h2>
              <p>${item.price}</p>

              <div className="mt-2 flex flex-col gap-2">
                <button
                  onClick={() => dispatch(addToCart(item))}
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => toggleWishlist(item)}
                  className="px-3 py-1 text-red-500 hover:text-red-700"
                >
                  ❤️ Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
