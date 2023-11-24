// Header.js
import React from "react";
import { FaCheck } from "react-icons/fa";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <FaCheck className={styles.logoIcon} />
        <h1 className={styles.logoText}>To-Do App</h1>
      </div>
    </header>
  );
};

export default Header;
