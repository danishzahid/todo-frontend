import React, { useContext, useState } from "react";
import { FaEdit } from "react-icons/fa";
import styles from "./EditProfile.module.css";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UserContext from "../contexts/UserContext";

const EditProfile = () => {
  const { user } = useContext(UserContext);
  const [newUser, setNewUser] = useState(user || {}); //replace this user with actual

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a PUT request to update user profile
      await axios.put(
        `${process.env.REACT_APP_APIURL}/api/users/me`,
        {
          name: newUser.name,
          email: newUser.email,
        },
        { withCredentials: true }
      );

      // Display success toaster
      toast.success("Profile updated successfully!");

      // Navigate to the home page after successful update
      navigate("/");
    } catch (error) {
      console.error("Error updating profile:", error.message);

      // Display error toaster
      toast.error("Failed to update profile. Please try again.");
    }
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
              value={newUser.name}
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
              value={newUser.email}
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
