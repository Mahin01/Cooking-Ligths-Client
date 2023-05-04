// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDxa7Vc3kVzCsnCUkCIRM2UEU95LZ_QCI",
  authDomain: "cooking-lights.firebaseapp.com",
  projectId: "cooking-lights",
  storageBucket: "cooking-lights.appspot.com",
  messagingSenderId: "1058093801995",
  appId: "1:1058093801995:web:2170cc85166109910a1d0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;