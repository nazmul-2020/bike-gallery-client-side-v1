// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUTbBf6JjefCeiikeO7vgljNaTOQdL6lw",
  authDomain: "bike-gallery-8ee18.firebaseapp.com",
  projectId: "bike-gallery-8ee18",
  storageBucket: "bike-gallery-8ee18.appspot.com",
  messagingSenderId: "64464925063",
  appId: "1:64464925063:web:7b5364f1729b2b6b012322"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;