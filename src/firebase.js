// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // Importing Auth module
import { getFirestore } from "firebase/firestore"; // Only if needed

const firebaseConfig = {
  apiKey: "AIzaSyBL25xnAZCd8ylvsJeEmdSrV9FVWUgcUxc",
  authDomain: "sneham-9.firebaseapp.com",
  projectId: "sneham-9",
  storageBucket: "sneham-9.appspot.com",
  messagingSenderId: "169484837000",
  appId: "1:169484837000:web:3cc50638cfe08a39bd3f3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exporting auth and db
export const auth = getAuth(app); 
export const db = getFirestore(app);  // Export if needed for Firestore

