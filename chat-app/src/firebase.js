// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByyA8FOSRjlKuVZiBUCUBIFR7HDrcEXWo",
  authDomain: "chat-6b233.firebaseapp.com",
  projectId: "chat-6b233",
  storageBucket: "chat-6b233.appspot.com",
  messagingSenderId: "957412066067",
  appId: "1:957412066067:web:f617c6fe3e13c4784950e6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
