// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log('environment variable', import.meta.VITE_PASS);
const firebaseConfig = {
  apiKey: "AIzaSyBNz_P1wg3IJczCI2arYE60MeWGmSqyKew",
  authDomain: "the-news-dragon-client-36051.firebaseapp.com",
  projectId: "the-news-dragon-client-36051",
  storageBucket: "the-news-dragon-client-36051.appspot.com",
  messagingSenderId: "514891460042",
  appId: "1:514891460042:web:2cf163007a73e29d82f333"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;