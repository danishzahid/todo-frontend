// NoTask.jsx
import React from "react";
import styles from "./NoTask.module.css";

const NoTask = () => {
  return (
    <div className={styles.noTaskContainer}>
      <p>You have no tasks. Please start adding tasks.</p>
    </div>
  );
};

export default NoTask;
