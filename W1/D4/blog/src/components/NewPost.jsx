import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

function NewPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentUser) return alert("Login first");

    try {
      await addDoc(collection(db, "blogs"), {
        title,
        content,
        userId: currentUser.uid,
        createdAt: serverTimestamp(),
      });
      navigate("/blogs");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-16 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Write a New Blog</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded" type="text" placeholder="Blog Title" />
        <textarea value={content} onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border rounded" rows="6" placeholder="Content" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Post Blog</button>
      </form>
    </div>
  );
}
export default NewPost;
