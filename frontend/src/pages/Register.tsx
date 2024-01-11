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
      <h2 className="text-3xl font-bold text-gray-700">Create an account</h2>
      <div className="flex gap-5 max-md:flex-col">
        <label className="flex-1 text-xl font-bold text-gray-600">
          First name
          <input
            type="text"
            id="firstName"
            className="w-full px-4 py-2 text-lg border rounded-md"
          />
        </label>
        <label className="flex-1 text-xl font-bold text-gray-600">
          Last name
          <input
            type="text"
            className="w-full px-4 py-2 text-lg border rounded-md"
            id="lastName"
          />
        </label>
      </div>
    </form>
  );
};

export default Register;
