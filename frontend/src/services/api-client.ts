import axios, { AxiosResponse } from "axios";
import { RegisterForm } from "../pages/Register";
import { SigninForm } from "../pages/Signin";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: `${API_BASE_URL}/api/`,
  withCredentials: true,
});

export const registerUser = async (data: RegisterForm) => {
  try {
    const response: AxiosResponse<RegisterForm> =
      await axiosInstance.post<RegisterForm>("users/register", data, {
        withCredentials: true,
      });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("An error occurred while registering the user.");
    }
  }
};

export const validateToken = async () => {
  try {
    const response = await axiosInstance.get("auth/validate-token", {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("An error occurred while registering the user.");
    }
  }
};

export const loginUser = async (data: SigninForm) => {
  try {
    const response = await axiosInstance.post("auth/login", data, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("An error occurred while signing in the user.");
    }
  }
};

export const logoutUser = async () => {
  try {
    const response = await axiosInstance.post("auth/logout", null, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("An error occurred while logging out the user.");
    }
  }
};
