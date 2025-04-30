import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { Link } from "react-router-dom";

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      setBlogs(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchBlogs();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6">Recent Blogs</h2>
      <ul className="space-y-4">
        {blogs.map(blog => (
          <li key={blog.id} className="border-b pb-2">
            <Link to={`/blogs/${blog.id}`} className="text-xl text-blue-600 hover:underline">
              {blog.title}
            </Link>
            <p className="text-sm text-gray-500">By user: {blog.userId}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Blogs;
