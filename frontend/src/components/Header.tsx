import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

const Header = () => {
  const { isLoggedIn } = useAppContext();
  return (
    <div className="py-6 bg-primary">
      <div className="container flex justify-between mx-auto">
        <span className="text-3xl font-bold tracking-tight text-white ">
          <Link to="/">Booking.com</Link>
        </span>
        <span className="flex items-center gap-10 ">
          {isLoggedIn ? (
            <>
              <Link
                to="/my-bookings"
                className="text-lg text-white rounded-md hover:text-slate-200"
              >
                My Bookings
              </Link>
              <Link
                to="/my-hotels"
                className="text-lg text-white rounded-md hover:text-slate-200"
              >
                My Hotels
              </Link>
              <Link
                to="/sign-out"
                className=" text-lg bg-white px-4 py-1.5 rounded-md hover:bg-gray-200 text-primary"
              >
                Sign Out
              </Link>
            </>
          ) : (
            <Link
              to="/sign-in"
              className=" text-lg bg-white px-4 py-1.5 rounded-md hover:bg-gray-200 text-primary"
            >
              Sign In
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
