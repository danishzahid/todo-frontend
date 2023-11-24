// Auth.js
import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import styles from "./Auth.module.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <>
      <Header />
      <div className={styles.authContainer}>
        <div className={styles.formContainer}>
          <h2>{isLogin ? "Login" : "Sign Up"}</h2>
          <form>
            {!isLogin && (
              <div className={styles.inputGroup}>
                <FaUser className={styles.icon} />
                <input type="text" placeholder="Your Name" />
              </div>
            )}
            <div className={styles.inputGroup}>
              <FaEnvelope className={styles.icon} />
              <input type="email" placeholder="Email" />
            </div>
            <div className={styles.inputGroup}>
              <FaLock className={styles.icon} />
              <input type="password" placeholder="Password" />
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
