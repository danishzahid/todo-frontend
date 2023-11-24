// Footer.js
import React from "react";
import { FaHeart } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Made with <FaHeart className={styles.heartIcon} /> | 2023 All Rights
        Reserved
      </p>
    </footer>
  );
};

export default Footer;
