import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="flex justify-between items-center">
      <div className="text-xs hidden md:block">
      <p className="font-bold">{user?.displayName}</p>
        <p className="text-gray-600 font-semibold">{user && user.email}</p>
      </div>

      <div className="nav space-x-5 font-semibold">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="login flex gap-2 items-center">
        <div>
          {user && user?.email ? (
            <div>
              <img className="w-14 mx-auto rounded-full" src={user?.photoURL} alt={user?.displayName} />
            </div>
          ) : (
            <img src={userIcon} alt="Icon of user" />
          )}
        </div>
        {user && user?.email ? (
          <button
            onClick={logOut}
            className="btn btn-error rounded-none text-white font-semibold"
          >
            Log Out
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="btn btn-neutral rounded-none text-white font-semibold"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
