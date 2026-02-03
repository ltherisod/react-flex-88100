// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
 
    // apiKey: import.meta.env.VITE_API_KEY,
const firebaseConfig = {
  apiKey: "AIzaSyBvHu2AwE797p1NHMb5ukEQp478thdm6x4",
  authDomain: "coder-flex-88100.firebaseapp.com",
  projectId: "coder-flex-88100",
  storageBucket: "coder-flex-88100.firebasestorage.app",
  messagingSenderId: "533243595536",
  appId: "1:533243595536:web:cd6fb821afdceaf8127395"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db= getFirestore(app);