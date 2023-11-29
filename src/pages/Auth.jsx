// Auth.js
import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import styles from "./Auth.module.css";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import Header from "../components/Header";
import Footer from "../components/Footer";
import axiosInstance from "../config/axiosConfig";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const toggleAuthMode = () => {
    setIsLogin((prev) => !prev);
  };

  const signup = async (userData) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_APIURL}/api/auth/signup`,
        userData,
        {
          withCredentials: true, // Include credentials (cookies) in the request
        }
      );
      console.log("Signup success:", response.data);
      toast.success("Signup successful");
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Signup error:", error.message);
      toast.error("Signup failed. Please try again.");
    }
  };

  const login = async (userData) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_APIURL}/api/auth/login`,
        userData,
        {
          withCredentials: true, // Include credentials (cookies) in the request
        }
      );

      console.log("Login success:", response.data);
      toast.success("Login successful");
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Login error:", error.message);
      toast.error("Login failed. Please check your credentials.");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    if (!isLogin) {
      userData.name = e.target.name.value;
      signup(userData);
    } else {
      login(userData);
    }
  };

  return (
    <>
      <Header />
      <div className={styles.authContainer}>
        <div className={styles.formContainer}>
          <h2>{isLogin ? "Login" : "Sign Up"}</h2>
          <form onSubmit={handleFormSubmit}>
            {!isLogin && (
              <div className={styles.inputGroup}>
                <FaUser className={styles.icon} />
                {/* <label htmlFor="name"></label> */}
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>
            )}
            <div className={styles.inputGroup}>
              <FaEnvelope className={styles.icon} />
              {/* <label htmlFor="email"></label> */}
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <div className={styles.inputGroup}>
              <FaLock className={styles.icon} />
              {/* <label htmlFor="password"></label> */}
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
          </form>
          <p>
            {isLogin ? "New user? " : "Already a user? "}
            <span onClick={toggleAuthMode}>
              {isLogin ? "Sign up" : "Login"}
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Auth;
