// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA7qA7n4Le0SlC-UtC4Z69kJDu5-1pXm84",
  authDomain: "space-con-e0a82.firebaseapp.com",
  projectId: "space-con-e0a82",
  storageBucket: "space-con-e0a82.appspot.com",
  messagingSenderId: "5797946148",
  appId: "1:5797946148:web:efe0192243dd10bd4809b1",
  measurementId: "G-VMX8XE9LGC"
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
