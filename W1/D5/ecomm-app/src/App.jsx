import { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";

function App() {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (product) => {
    setWishlist((prev) =>
      prev.find((item) => item.id === product.id)
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, product]
    );
  };

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar wishlistCount={wishlist.length} />
        <Routes>
          <Route
            path="/"
            element={
              <Home wishlist={wishlist} toggleWishlist={toggleWishlist} />
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/wishlist"
            element={
              <Wishlist wishlist={wishlist} toggleWishlist={toggleWishlist} />
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
