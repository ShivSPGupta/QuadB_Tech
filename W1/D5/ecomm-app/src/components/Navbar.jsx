import { useSelector } from "react-redux";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

export default function Navbar({ wishlistCount }) {
  const { toggleTheme } = useTheme();
  const cart = useSelector((state) => state.cart);

  return (
    <nav className="flex justify-between items-center p-5 shadow bg-white dark:bg-gray-800 dark:text-white sticky top-0 z-10">
      <Link to="/" className="text-xl font-bold text-blue-600">
        🛍 MyEcomShop
      </Link>
      <div className="flex items-center gap-4">
        <button onClick={toggleTheme}>🌗</button>
        <Link to="/wishlist">❤️ {wishlistCount}</Link>
        <Link to="/cart">🛒 {cart.length}</Link>
      </div>
    </nav>
  );
}
