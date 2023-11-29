// import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// function EditProfile() {
//   return (
//     <>
//       <Header />
//       <Footer />
//     </>
//   );
// }

// export default EditProfile;
// EditProfile.js

import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import styles from "./EditProfile.module.css";

const EditProfile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit changes (e.g., API call)
    console.log("Profile updated:", user);
  };

  return (
    <>
      <Header />
      <div className={styles.editProfileContainer}>
        <h2>Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
            <FaEdit className={styles.editIcon} />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
            <FaEdit className={styles.editIcon} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default EditProfile;
