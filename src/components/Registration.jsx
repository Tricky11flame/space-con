// pages/registration.js
"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth";

import { registerForEvent, checkRegistration ,getProfile } from "@/lib/api";
import { auth } from "@/lib/firebaseConfig"; // Import the auth instance

const Registration = () => {
  const router = useRouter();
  const auth = useAuth();
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (!auth.user) {
      router.push("/login");
    }

    const fetchProfile = async () => {
      // Use the auth instance for user data
      const userProfile = await getProfile(auth.user.uid);
      setUser(userProfile);
      setName(userProfile.name);
      setEmail(userProfile.email);
    };

    fetchProfile();
  }, [auth.user, router]);

  const handleRegistration = async () => {
    const hasRegistered = await checkRegistration(auth.user.uid);
    if (!hasRegistered) {
      await registerForEvent(auth.user.uid, name, email, phone);
      router.push("/success");
    } else {
      console.log("User has already registered for the event.");
    }
  };

  return (
      <div>
        <h1>Registration Page</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            Name:
            <input type="text" value={name} readOnly />
          </label>
          <label>
            Email:
            <input type="text" value={email} readOnly />
          </label>
          <label>
            Phone:
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <button onClick={handleRegistration}>Register</button>
        </form>
      </div>
  );
};

export default Registration;
