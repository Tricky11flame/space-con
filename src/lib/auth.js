// lib/auth.js
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebaseConfig"; // Firebase authentication module

const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return { user };
};

export { useAuth };
