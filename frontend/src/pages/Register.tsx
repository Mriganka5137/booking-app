import { useForm } from "react-hook-form";
interface RegisterForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const { register } = useForm<RegisterForm>();
  return (
    <form className="flex flex-col gap-5 ">
      <h2 className="mb-5 text-5xl font-bold text-gray-700">
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
        </label>
        <label className="label">
          Last name
          <input
            type="text"
            className="form-input"
            id="lastName"
            {...register("lastName", { required: "Last name is required" })}
          />
        </label>
      </div>
      <label className="label">
        Email
        <input
          type="email"
          className=" form-input"
          {...register("email", { required: "This field is required" })}
        />
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
      </label>
    </form>
  );
};

export default Register;
