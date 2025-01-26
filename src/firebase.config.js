// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACCtT0DEb135OZwGkpqTskKm-BjNEcBMY",
  authDomain: "assignment-10-e1389.firebaseapp.com",
  projectId: "assignment-10-e1389",
  storageBucket: "assignment-10-e1389.firebasestorage.app",
  messagingSenderId: "489789068370",
  appId: "1:489789068370:web:9787f44105cafa9fdafb8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);