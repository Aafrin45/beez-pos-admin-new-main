import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// ~~~~~~~~~ skafe-ttime-PROD ~~~~~~~~~
const firebaseConfigSkafe = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_STORAGEBUCKET,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
};

// Initialize Firebase and Firestore
const firebase = initializeApp(firebaseConfigSkafe);
const db = getFirestore(firebase);
const auth = getAuth(firebase);
const storage = getStorage(firebase);
export { db, firebase, auth, storage };
