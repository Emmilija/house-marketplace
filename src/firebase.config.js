import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBwQXmREjR-dYN6SchMMeM09NtfsGdkvMk",
  authDomain: "house-marketplace-8d087.firebaseapp.com",
  projectId: "house-marketplace-8d087",
  storageBucket: "house-marketplace-8d087.appspot.com",
  messagingSenderId: "568291367928",
  appId: "1:568291367928:web:6a312a1b399960c63f140d"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()