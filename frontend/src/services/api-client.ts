import axios from "axios";
import { RegisterForm } from "../pages/Register";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: `${API_BASE_URL}/api/users`,
});

export const registerUser = async (data: RegisterForm) => {
  try {
    const response = await axiosInstance.post("/register", data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
