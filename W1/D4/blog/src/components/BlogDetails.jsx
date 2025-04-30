import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

function BlogDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
        console.log("Blog ID:", id); // Add this for debugging
      const docRef = doc(db, "posts", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setPost(docSnap.data());
      }
    };
    fetchPost();
  }, [id]);

  if (!post) return <p className="text-center mt-16">Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto mt-16">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 whitespace-pre-wrap">{post.content}</p>
    </div>
  );
}

export default BlogDetails;
