import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_APIURL,
  withCredentials: true,
});

export default axiosInstance;
