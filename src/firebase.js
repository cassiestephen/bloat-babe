// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';
// for authentication
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEM-W8bZZrujTZzFI2DYjHNpve5huEHbs",
  authDomain: "bloat-blog.firebaseapp.com",
  projectId: "bloat-blog",
  storageBucket: "bloat-blog.appspot.com",
  messagingSenderId: "413895953808",
  appId: "1:413895953808:web:50e12218a44a6ead82b715"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize authentication
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);