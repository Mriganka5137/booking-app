import axios, { AxiosResponse } from "axios";
import { RegisterForm } from "../pages/Register";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: `${API_BASE_URL}/api/users`,
});

export const registerUser = async (data: RegisterForm) => {
  try {
    const response: AxiosResponse<RegisterForm> =
      await axiosInstance.post<RegisterForm>("/register", data);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("An error occurred while registering the user.");
    }
  }
};
