// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBL25xnAZCd8ylvsJeEmdSrV9FVWUgcUxc",
  authDomain: "sneham-9.firebaseapp.com",
  projectId: "sneham-9",
  storageBucket: "sneham-9.firebasestorage.app",
  messagingSenderId: "169484837000",
  appId: "1:169484837000:web:3cc50638cfe08a39bd3f3d"
};

const app = initializeApp(firebaseConfig);

// This gives you access to auth functions like createUserWithEmailAndPassword
export const auth = getAuth(app);
