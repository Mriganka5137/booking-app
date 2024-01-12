import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import * as apiClient from "../services/api-client";
import { useAppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";

export interface SigninForm {
  email: string;
  password: string;
}

const Signin = () => {
  const { showToast } = useAppContext();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninForm>();

  const mutation = useMutation({
    mutationFn: apiClient.loginUser,
    onSuccess: () => {
      showToast({
        message: "Logged in successfully",
        type: "success",
      });
      navigate("/", {
        replace: true,
      });
    },
    onError: (error: Error) => {
      showToast({
        message: error.message || "Sorry, something went wrong",
        type: "error",
      });
    },
  });

  const onSubmit = handleSubmit((data) => mutation.mutate(data));

  return (
    <form className="flex flex-col max-w-xl gap-8 mx-auto" onSubmit={onSubmit}>
      <h2 className="mb-5 text-5xl font-bold text-center text-gray-700">
        Sign in
      </h2>
      <label className="label">
        Email
        <input
          type="email"
          className=" form-input"
          {...register("email", { required: "This field is required" })}
        />
        {errors.email && (
          <span className="font-normal text-red-400 ">
            {errors.email.message}
          </span>
        )}
      </label>
      <label className="label">
        Password
        <input
          type="password"
          className=" form-input"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
        />
        {errors.password && (
          <span className="font-normal text-red-400 ">
            {errors.password.message}
          </span>
        )}
      </label>
      <button
        className="px-3 py-2 text-lg font-medium text-white bg-blue-600 rounded-md cursor-pointer hover:bg-primary"
        type="submit"
      >
        Sign In
      </button>
    </form>
  );
};

export default Signin;
