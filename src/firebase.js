import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAeI2_IZ9upcPUK4MPKR0ZbZf9dOnwJD5o",
  authDomain: "chatapp-6f640.firebaseapp.com",
  projectId: "chatapp-6f640",
  storageBucket: "chatapp-6f640.appspot.com",
  messagingSenderId: "535763878686",
  appId: "1:535763878686:web:e67b01044c32977ee03f0f",
  measurementId: "G-YQH9J868E3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();

