// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByIqrdWqkvDQ_xPcup-BwEd7xR2cm0VHE",
  authDomain: "login-92f7a.firebaseapp.com",
  databaseURL: "https://login-92f7a-default-rtdb.firebaseio.com",
  projectId: "login-92f7a",
  storageBucket: "login-92f7a.appspot.com",
  messagingSenderId: "28224127501",
  appId: "1:28224127501:web:3fa2ec25d5f52257740b44",
  measurementId: "G-L6E71433DY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
