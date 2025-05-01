import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function Home({ wishlist, toggleWishlist }) {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="border p-5 rounded shadow hover:shadow-lg transition"
        >
          <img
            src={product.image}
            alt={product.title}
            className="h-40 object-contain mx-auto mb-2"
          />
          <h2 className="text-sm font-semibold">{product.title}</h2>
          <p className="text-sm">${product.price}</p>
          <div className="mt-2 flex justify-between items-center">
            <button
              className="bg-green-500 text-white text-sm px-2 py-1 rounded"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>
            <button
              onClick={() => toggleWishlist(product)}
              className="text-red-500 text-lg"
            >
              {wishlist.find((item) => item.id === product.id) ? "❤️" : "🤍"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
