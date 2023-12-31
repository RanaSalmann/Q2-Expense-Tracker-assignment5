import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZigK2mzU_gN8rbt9FUcHOsrSlnfhwbcw",
  authDomain: "expenes-trcker.firebaseapp.com",
  projectId: "expenes-trcker",
  storageBucket: "expenes-trcker.appspot.com",
  messagingSenderId: "4297874641",
  appId: "1:4297874641:web:9c0facbe797804d5f979f0",
  measurementId: "G-BHDE1ZRJ75"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();