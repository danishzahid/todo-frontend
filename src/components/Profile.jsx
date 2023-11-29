// Profile.js

import React from "react";
import styles from "./Profile.module.css"; // Import the CSS module
import { FaList, FaUserEdit, FaSignOutAlt } from "react-icons/fa";
const Profile = () => {
  const userEmail = "abc.com";
  const onMyTasksClick = () => {};
  const onLogout = () => {};
  const onEditProfileClick = () => {};

  return (
    <div className={styles.profileContainer}>
      <div>
        <p>Email: {userEmail}</p>
      </div>
      <div>
        <button onClick={onMyTasksClick}>
          <FaList /> My Tasks
        </button>
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
