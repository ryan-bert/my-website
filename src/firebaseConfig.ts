// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDme_Qc5-h03_kgcEtM8NDe1oveNuiZ9Zk",
  authDomain: "my-website-e4b53.firebaseapp.com",
  projectId: "my-website-e4b53",
  storageBucket: "my-website-e4b53.appspot.com",
  messagingSenderId: "697906791133",
  appId: "1:697906791133:web:3ca6a59d65c13b128f5134",
  measurementId: "G-X0TGMC084F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
const db = getFirestore(app);
// Initialize Analytics
const analytics = getAnalytics(app);

export { db, analytics };