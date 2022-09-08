import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzFwRbcqtuECoGRlrzKJzhwukUqZ5lvJQ",
  authDomain: "react-chat-c342c.firebaseapp.com",
  projectId: "react-chat-c342c",
  storageBucket: "react-chat-c342c.appspot.com",
  messagingSenderId: "458575001570",
  appId: "1:458575001570:web:114337db575f1275b6abbb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();

// Create a root reference
export const storage = getStorage();
export const db = getFirestore();
