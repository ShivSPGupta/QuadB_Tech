import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

function Navbar() {
  const { currentUser, logout } = useAuth();

  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <div className="space-x-4">
        <Link to="/" className="font-bold">MyBlog</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {currentUser && <Link to="/new-post">New Post</Link>}
      </div>
      <div className="space-x-4">
        {currentUser ? (
          <>
            <span>{currentUser.email}</span>
            <button onClick={logout} className="text-red-600">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
