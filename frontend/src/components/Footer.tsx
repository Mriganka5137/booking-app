import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-primary py-10">
      <div className="container mx-auto flex justify-between items-center">
        <span className=" font-bold text-3xl text-white tracking-tight">
          <Link to="/">Booking.com</Link>
        </span>
        <span className=" flex gap-5 tracking-tight text-lg text-white">
          <p className="cursor-pointer">Privacy policy</p>
          <p className="cursor-pointer">Contact </p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
