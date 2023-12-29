"use client";
import React, { useState, useEffect } from "react";
import Ripples from "react-ripples";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import "./styles.css";
import { firebaseApp } from "@/firebase/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { firestore } from "@/firebase/firebaseConfig";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    college: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [alert, setAlert] = useState({ show: false, message: "" });
  const [alertClass, setAlertClass] = useState("");
  const [emailVerified, setEmailVerified] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
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

  const handleVerification = async () => {
    const auth = getAuth(firebaseApp);
    await auth.currentUser.reload();
    if (auth.currentUser.emailVerified) {
      setEmailVerified(true);
      router.push("/login");
    } else {
      showAlert("Please verify your email first.");
    }
  };

  // Show custom alert
  const showAlert = (message) => {
    setAlert({ show: true, message });
    console.log(message);
    setTimeout(() => {
      setAlert({ show: false, message: "" });
    }, 2000);
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const checkIfStrongPassword = (password) => {
    const strongRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    return strongRegex.test(password);
  };
  // Handle form submission
  const handleSubmit = async (e) => {
    const auth = getAuth(firebaseApp);
    e.preventDefault();
    if (!formData.name) {
      showAlert("Name is required");
      return;
    }
    if (!formData.college) {
      showAlert("College name is required");
      return;
    }
    if (!formData.email) {
      showAlert("Email is required");
      return;
    }
    if (!formData.phone) {
      showAlert("Phone number is required");
      return;
    }
    if (!formData.password) {
      showAlert("Password is required");
      return;
    }
    if (!formData.confirmPassword) {
      showAlert("Confirm password is required");
      return;
    }
    if (!checkIfStrongPassword(formData.password)) {
      showAlert(
        "Password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character"
      );
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      showAlert("Passwords do not match");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const user = userCredential.user;
      const userRef = doc(firestore, "users", user.uid); // Replace "users" with your Firestore collection name
      const userData = {
        name: formData.name,
        college: formData.college,
        phone: formData.phone,
      };

      await setDoc(userRef, userData);

      // Send email verification
      await sendEmailVerification(user);

      setUserCreated(true);

      showAlert("Verification email sent. Please check your inbox.");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        showAlert("The email address is already in use by another account.");
        // Additional actions for this specific error can be added here
      } else {
        showAlert(error.message); // General error message for other types of errors
      }
    }
  };

  const inputField = (label, name, value, onChange, type = "text") => (
    <div>
      <label
        className="text-royal-lavender font-akira"
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
    <div className="relative h-screen w-full">
      <div className="absolute h-full w-full bg-black/30 backdrop-blur-sm"></div>
      <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-space-background">
        {alert.show && <div className={alertClass}>{alert.message}</div>}
        {userCreated && !emailVerified ? (
          <div className="p-6 bg-mystic-plum rounded-lg shadow-lg animate-slideUp">
            <div className="verification-screen">
              <h2 className="text-xl font-bold text-center text-petal-pink mb-4">
                Verify Your Email
              </h2>
              <p className="text-center mb-6 text-petal-pink">
                Please check your email inbox and click the verification link.
              </p>
              <div className="text-center">
                <button
                  onClick={handleVerification}
                  className="bg-soft-lilac text-petal-pink font-bold py-2 px-4 rounded hover:bg-petal-pink hover:text-white transition duration-300 ease-in-out"
                >
                  Click Here When Verified
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="slide-enter">
            <div className="p-6 bg-mystic-plum rounded-lg shadow-lg animate-slideUp">
              <h2 className="text-2xl font-bold mb-6 text-petal-pink font-ethnocentric underline-animation">
                Sign Up
              </h2>

              <form className="space-y-4" onSubmit={handleSubmit}>
                {inputField("Name", "name", formData.name, handleChange)}
                {inputField(
                  "College Name",
                  "college",
                  formData.college,
                  handleChange
                )}
                {inputField("Email ID", "email", formData.email, handleChange)}
                {inputField(
                  "Phone Number",
                  "phone",
                  formData.phone,
                  handleChange
                )}
                {inputField(
                  "Password",
                  "password",
                  formData.password,
                  handleChange,
                  "password"
                )}
                {inputField(
                  "Confirm Password",
                  "confirmPassword",
                  formData.confirmPassword,
                  handleChange,
                  "password"
                )}
                <Ripples during={600} className="block w-full">
                  <button
                    type="submit"
                    className="w-full p-2 bg-royal-lavender text-mystic-plum rounded hover:bg-soft-lilac transition duration-300 ease-in-out font-akira"
                  >
                    Submit
                  </button>
                </Ripples>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
