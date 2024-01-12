import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as apiClinet from "../services/api-client";
import { useAppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";
export interface RegisterForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const queryClient = useQueryClient();
  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>();

  const mutation = useMutation({
    mutationFn: apiClinet.registerUser,
    onSuccess: async () => {
      showToast({
        message: "Account created successfully",
        type: "success",
      });
      await queryClient.invalidateQueries({ queryKey: ["validateToken"] });
      navigate("/");
    },
    onError: (error: Error) => {
      showToast({
        message: error.message || "Sorry, something went wrong",
        type: "error",
      });
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });
  return (
    <form className="flex flex-col gap-8 " onSubmit={onSubmit}>
      <h2 className="mb-5 text-5xl font-bold text-center text-gray-700">
        Create an account
      </h2>
      <div className="flex gap-5 max-md:flex-col">
        <label className="label">
          First name
          <input
            type="text"
            id="firstName"
            className="form-input"
            {...register("firstName", { required: "First name is required" })}
          />
          {errors.firstName && (
            <span className="font-normal text-red-400 ">
              {errors.firstName.message}
            </span>
          )}
        </label>
        <label className="label">
          Last name
          <input
            type="text"
            className="form-input"
            id="lastName"
            {...register("lastName", { required: "Last name is required" })}
          />
          {errors.lastName && (
            <span className="font-normal text-red-400 ">
              {errors.lastName.message}
            </span>
          )}
        </label>
      </div>
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
      <label className="label">
        Confirm password
        <input
          type="password"
          className=" form-input"
          {...register("confirmPassword", {
            validate: (value) => {
              if (!value) {
                return "This field is required";
              } else if (value !== watch("password")) {
                return "Passwords do not match";
              }
            },
          })}
        />
        {errors.confirmPassword && (
          <span className="font-normal text-red-400 ">
            {errors.confirmPassword.message}
          </span>
        )}
      </label>
      <span className="text-right">
        <button
          disabled={mutation.isPending}
          className="px-3 py-2 text-lg font-medium text-white bg-blue-600 rounded-md hover:bg-primary"
          type="submit"
        >
          Create Account
        </button>
      </span>
    </form>
  );
};

export default Register;
