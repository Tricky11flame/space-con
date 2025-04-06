// lib/api/api.js
import { firestore } from "./firebaseConfig"; // Assuming your Firebase configuration file is in the same folder

import {
  getDoc,
  addDoc,
  query,
  where,
  getDocs,
  collection,
  serverTimestamp,
} from "firebase/firestore";

const getProfile = async (userId) => {
  const userDoc = await getDoc(doc(firestore, "users", userId));
  return userDoc.data();
};

const registerForEvent = async (userId, name, email, phone) => {
  const registrationsCollection = collection(firestore, "registrations");
  await addDoc(registrationsCollection, {
    userId,
    name,
    email,
    phone,
    timestamp: serverTimestamp(),
  });
};

const checkRegistration = async (userId) => {
  const registrationsQuery = query(
    collection(firestore, "registrations"),
    where("userId", "==", userId)
  );

  const registrationsSnapshot = await getDocs(registrationsQuery);
  return !registrationsSnapshot.empty;
};

export { getProfile, registerForEvent, checkRegistration };
