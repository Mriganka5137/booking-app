import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";
import SignInButton from "./SignInButton";
import RegisterButton from "./RegisterButton";

const Header = () => {
  const { isLoggedIn } = useAppContext();
  return (
    <div className="py-6 bg-primary">
      <div className="container flex justify-between mx-auto">
        <span className="text-3xl font-bold tracking-tight text-white ">
          <Link to="/">Booking.com</Link>
        </span>
        <span className="flex items-center gap-5 ">
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
              <SignOutButton />
            </>
          ) : (
            <>
              <SignInButton />
              <RegisterButton />
            </>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
