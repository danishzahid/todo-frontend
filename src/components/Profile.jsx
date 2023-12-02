// Profile.js

import React, { useContext, useEffect, useState } from "react";
import styles from "./Profile.module.css"; // Import the CSS module
import { FaList, FaUserEdit, FaSignOutAlt } from "react-icons/fa";

import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
const Profile = () => {
  const navigate = useNavigate();

  const { user } = useContext(UserContext);
  const [newUser, setNewUser] = useState(user || {});

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${process.env.REACT_APP_APIURL}/api/users/me`,
  //         { withCredentials: true }
  //       );
  //       setUser(response.data);
  //       console.log(user);
  //     } catch (error) {
  //       console.error("Error fetching user:", error.message);
  //     }
  //   };

  //   fetchUser();
  // }, []);
  const userEmail = "abc.com";
  const onMyTasksClick = () => {};

  const onLogout = async () => {
    try {
      await axios.get(`${process.env.REACT_APP_APIURL}/api/auth/logout`, {
        withCredentials: true,
      });
      toast.success("logout successful");
      navigate("/auth", { replace: true });
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  const onEditProfileClick = () => {
    navigate("/edit-profile", { replace: true });
  };

  return (
    <div className={styles.profileContainer}>
      <div>
        <p>User: {newUser.name}</p>
      </div>
      <div>
        <button onClick={onEditProfileClick}>
          Edit Profile <FaUserEdit />
        </button>
        <button onClick={onLogout}>
          Logout <FaSignOutAlt />
        </button>
      </div>
    </div>
  );
};

export default Profile;
