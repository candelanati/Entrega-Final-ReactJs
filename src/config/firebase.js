// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPTrGwD2W6O175MIuD1gU5j9XTO68jIu4",
  authDomain: "reactjs-coderhouse-fb4ab.firebaseapp.com",
  projectId: "reactjs-coderhouse-fb4ab",
  storageBucket: "reactjs-coderhouse-fb4ab.firebasestorage.app",
  messagingSenderId: "804753287763",
  appId: "1:804753287763:web:1a0b6d56cb56a51b7d74a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default {db}