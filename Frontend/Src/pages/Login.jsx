// src/pages/Login.jsx
import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider(); // ✅ cleaner here
      await signInWithPopup(auth, provider);
      console.log("✅ Login successful, navigating...");
      navigate("/"); // default route will redirect to /create
    } catch (err) {
      console.error("Login error:", err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-amber-50 px-6">
      {/* Logo */}
      <img
        src="https://media.discordapp.net/attachments/1368024001233948735/1368089991980384326/ChatGPT_Image_May_3_2025_01_00_55_AM_1.png?ex=68179d57&is=68164bd7&hm=2c134e0eb12c8fee825c778abe79e4f2cf833d9ff257ff05d1b8fc79f2cd745a&=&format=webp&quality=lossless&width=1900&height=1900"
        alt="ZipTrip Logo"
        className="w-36 h-36 rounded-full mb-4 object-cover"
      />

      {/* App name */}
      <h1 className="text-3xl font-extrabold text-gray-800 mb-8">ZipTrip</h1>

      {/* Card */}
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm text-center">
        <p className="text-xl font-medium mb-4 text-gray-700">Sign in to get started</p>
        <button
          onClick={handleGoogleSignIn}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-all font-semibold text-lg"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
