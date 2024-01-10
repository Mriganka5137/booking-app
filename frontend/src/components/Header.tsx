import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" bg-red-900 py-6">
      <div className="container mx-auto flex justify-between">
        <span className=" font-bold text-3xl text-white tracking-tight">
          <Link to="/">MakeMyTrip.com</Link>
        </span>
        <span className="flex space-x-2">
          <Link
            to="/sign-in"
            className=" text-lg bg-white px-4 py-1.5 rounded-full hover:bg-gray-200"
          >
            Sign In
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
