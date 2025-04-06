// app/(root)/
"use client";

import React, { useState, useEffect } from "react";
import Ripples from "react-ripples";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import "./styles.css";
import { firebaseApp } from "@/lib/firebaseConfig";
import Loader from "@/components/loader";
import Navbar from "@/components/Navbar";

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [alert, setAlert] = useState({ show: false, message: "" });
  const [alertClass, setAlertClass] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (alert.show) {
      setAlertClass("alert-box show");
      setTimeout(() => {
        setAlertClass("alert-box");
      }, 2000);
    } else {
      setAlertClass("alert-box");
    }
  }, [alert]);

  // Show custom alert
  const showAlert = (message) => {
    setAlert({ show: true, message });
    setTimeout(() => {
      setAlert({ show: false, message: "" });
    }, 2000);
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    const auth = getAuth(firebaseApp);
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      // Redirect to the homepage or user dashboard
      router.push("/");
    } catch (error) {
      setLoading(false); // Stop loading on error
      showAlert(error.message);
    }
  };

  const inputField = (label, name, value, onChange, type = "text") => (
    <div>
      <label
        className="text-petal-pink font-akira"
        htmlFor={name}
        style={{
          textShadow: `
            0 0 2px #A367B1,  /* Top shadow */
            0 0 2px #A367B1,  /* Right shadow */
            0 0 2px #A367B1,  /* Bottom shadow */
            0 0 2px #A367B1   /* Left shadow */
          `,
        }}
      >
        {label}
      </label>
      <input
        className="w-full p-2 border-2 border-royal-lavender rounded font-lemonmilk text-petal-pink bg-mystic-plum"
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );

  return (
    <>
    <Navbar/>
    <div className="relative min-h-screen w-full">
      <div className="absolute h-full w-full bg-black/30 backdrop-blur-sm"></div>
      <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-space-background">
        {alert.show && <div className={alertClass}>{alert.message}</div>}
        <div className="slide-enter">
          {loading ? (
            <Loader />
          ) : (
            <div className="p-6 bg-mystic-plum rounded-lg shadow-lg animate-slideUp">
              <h2 className="text-2xl font-bold mb-6 text-petal-pink font-ethnocentric underline-animation">
                Sign In
              </h2>

              <form className="space-y-4" onSubmit={handleSubmit}>
                {inputField(
                  "Email ID",
                  "email",
                  formData.email,
                  handleChange,
                  "email"
                )}
                {inputField(
                  "Password",
                  "password",
                  formData.password,
                  handleChange,
                  "password"
                )}
                <Ripples during={600} className="block w-full">
                  <button
                    type="submit"
                    className="w-full p-2 bg-royal-lavender text-mystic-plum rounded hover:bg-soft-lilac transition duration-300 ease-in-out font-akira"
                  >
                    Sign In
                  </button>
                </Ripples>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  </>
  );
}
