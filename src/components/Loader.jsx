// Loader.js
import React from "react";
import styled from "styled-components";
import styles from "./Loader.module.css"; // Import module CSS

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoaderDot = styled.div`
  width: 15px;
  height: 15px;
  background-color: #3498db;
  border-radius: 50%;
  margin: 0 5px;
  animation: ${styles.loaderAnimation} 1.5s infinite ease-in-out;
`;

const Loader = () => {
  return (
    <LoaderWrapper>
      <LoaderDot />
      <LoaderDot />
      <LoaderDot />
    </LoaderWrapper>
  );
};

export default Loader;
