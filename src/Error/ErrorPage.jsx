import { Link } from "react-router-dom";
import logo from "../assets/nav-logo.png";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 lg:mt-40 md:mt-32 mt-36">
      <img className="md:w-60 w-48" src={logo} alt="Error Image" />

      <h2 className="md:text-4xl text-2xl text-gray-500 font-bold">
        Page Not Found: 404
      </h2>

        <Link to="/" className="btn bg-amber-500 rounded-none px-7 text-white font-bold mt-5">
          Back to Home
        </Link>
    </div>
  );
};

export default ErrorPage;
