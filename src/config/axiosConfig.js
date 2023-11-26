import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://todo-backend-rdhq.onrender.com",
  withCredentials: true,
});

export default axiosInstance;
