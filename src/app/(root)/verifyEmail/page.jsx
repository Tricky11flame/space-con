// app/(root)/verifyEmail
"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { applyActionCode, getAuth } from "firebase/auth";
import { firebaseApp } from "@/lib/firebaseConfig";
import "./style.css";
const EmailVerification = () => {
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();
  const oobCode = searchParams.get("oobCode"); // Extract the oobCode from URL
  const auth = getAuth(firebaseApp);
  const router = useRouter();

  useEffect(() => {
    if (oobCode) {
      applyActionCode(auth, oobCode)
        .then(() => {
          setIsLoading(false);
          router.push("/login"); // Redirect to the homepage
        })
        .catch((error) => {
          setIsLoading(false);
          console.error(`Error during verification: ${error.message}`);
        });
    } else {
      setIsLoading(false);
    }
  }, [oobCode, router]);

  if (isLoading) {
    return (
      <div>
        <h2>Verifying your email...</h2>
        {/* Spinner or loading animation */}
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div>
      <h2>Email Verification</h2>
      <p>Redirecting to the homepage...</p>
    </div>
  );
};

export default EmailVerification;
