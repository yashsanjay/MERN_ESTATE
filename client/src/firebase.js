// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-b3170.firebaseapp.com",
  projectId: "mern-estate-b3170",
  storageBucket: "mern-estate-b3170.appspot.com",
  messagingSenderId: "1090071951028",
  appId: "1:1090071951028:web:fb85b3314c956ae7bfc9e1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);