import { Link } from "react-router-dom";

const RegisterButton = () => {
  return (
    <button className=" text-lg bg-white px-4 py-1.5 rounded-md hover:bg-gray-200 text-primary">
      <Link to="/register">Register</Link>
    </button>
  );
};

export default RegisterButton;
