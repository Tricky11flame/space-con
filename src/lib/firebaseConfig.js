// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
export const firebaseConfig = {
  apiKey: "AIzaSyBJl434DkkMfmLgWdOMbnNI28ZWmboA1JA",
  authDomain: "nakshatra-1b99e.firebaseapp.com",
  projectId: "nakshatra-1b99e",
  storageBucket: "nakshatra-1b99e.appspot.com",
  messagingSenderId: "34151056050",
  appId: "1:34151056050:web:21fad5c19f3c755246ffab",
  measurementId: "G-P3Q30G219Z",
};


// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firestore = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
// setPersistence(auth, browserLocalPersistence)
//   .then(() => {
//     // Existing sign-in process
//     return signInWithEmailAndPassword(auth, email, password);
//   })
//   .catch((error) => {
//     // Handle errors here
//   });
