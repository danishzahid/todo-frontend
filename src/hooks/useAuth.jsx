import axios from "axios";
import { useEffect, useState } from "react";

export default () => {
  const [auth, setAuth] = useState();

  const verifyAuth = async () => {
    try {
      const res = await axios.get(
        "https://todo-backend-rdhq.onrender.com/api/auth/isLoggedIn",
        { withCredentials: true }
      );

      console.log(res.data, "isLoggedIn called");
      return res.data;
    } catch (error) {
      console.error(error);
      return false; // change it to false after bug fix
    }
  };

  useEffect(() => {
    (async () => {
      const data = await verifyAuth();
      setAuth(data);
    })();
  }, []);
  return { auth };
};
