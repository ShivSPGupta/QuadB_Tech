import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATAyV3Mjhzm0GoHDzFQ3dKB0LuaLh8T2Y",
  authDomain: "blog-d46f5.firebaseapp.com",
  projectId: "blog-d46f5",
  storageBucket: "blog-d46f5.firebasestorage.app",
  messagingSenderId: "527858811671",
  appId: "1:527858811671:web:3aff03a7f98b9d39c46d52",
  measurementId: "G-4B41MTWJ0C",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);