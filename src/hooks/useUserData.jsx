// useUserData.js
import { useState, useEffect } from "react";
import axios from "axios";

const useUserData = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_APIURL}/api/users/me`,
          { withCredentials: true }
        );
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user:", error.message);
      }
    };

    fetchUser();
  }, []);

  return { user };
};

export default useUserData;
