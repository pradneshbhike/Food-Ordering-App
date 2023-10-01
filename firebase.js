// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8nLLQdh_hBVL_qBtoGN8VJvQFlslyLf4",
  authDomain: "food-menu-app-419d0.firebaseapp.com",
  projectId: "food-menu-app-419d0",
  storageBucket: "food-menu-app-419d0.appspot.com",
  messagingSenderId: "158968018418",
  appId: "1:158968018418:web:fc0c9c76a6dc3075d1a76b",
  measurementId: "G-HR4SDXXREK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);