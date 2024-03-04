import axios from "axios";
import { Base_Api } from "./axios";
const axiosInstance = axios.create({
  baseURL: Base_Api,
});
axiosInstance.interceptors.response.use(
  (res) => res,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something Went Wrong"
    )
);