import { Link } from "react-router-dom";

const SignInButton = () => {
  return (
    <button className=" text-lg bg-white px-4 py-1.5 rounded-md hover:bg-gray-200 text-primary">
      <Link to="/sign-in">Sign In</Link>
    </button>
  );
};

export default SignInButton;
