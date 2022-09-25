// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
import { getAuth } from "@firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIRZIjjaMMFdTtz7WQkbKnpMYRC6jaWuw",
  authDomain: "suwan-main.firebaseapp.com",
  projectId: "suwan-main",
  storageBucket: "suwan-main.appspot.com",
  messagingSenderId: "703212386019",
  appId: "1:703212386019:web:99fa2b61401e5835d4f7d6",
  measurementId: "G-7JTD2T01EN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);