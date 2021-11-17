// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBc4CneZRnFaSX02tK2R0LeFjLfOub89Tw",
  authDomain: "fir-pj-1d2e3.firebaseapp.com",
  projectId: "fir-pj-1d2e3",
  storageBucket: "fir-pj-1d2e3.appspot.com",
  messagingSenderId: "204955924301",
  appId: "1:204955924301:web:4974090bfc1174e7296904",
  measurementId: "G-GBXJHEHDC6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

