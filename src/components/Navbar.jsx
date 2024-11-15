import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="flex justify-between items-center">
      <div className="text-sm hidden md:block">
        <p className="font-bold">{user?.displayName}</p>
        <p className="text-gray-600 font-semibold">{user && user.email}</p>
      </div>

      <div className="navbar-start md:hidden block">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle bg-slate-400 rounded-xl text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-60 space-y-2 btn-ghost p-4 shadow"
          >
            <div className="text-xs">
              <p className="font-bold">{user?.displayName}</p>
              <p className="text-gray-600 font-semibold">
                {user && user.email}
              </p>
            </div>
              <Link className="text-gray-600 font-semibold" to="/">Home</Link>
              <Link className="text-gray-600 font-semibold" to="/career">Career</Link>
              <Link className="text-gray-600 font-semibold" to="/about">About</Link>
          </ul>
        </div>
      </div>

      <div className="nav space-x-5 font-semibold hidden md:block">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="login flex gap-2 items-center">
        <div>
          {user && user?.email ? (
            <div>
              <img
                className="w-14 h-14 mx-auto rounded-full border-2 border-gray-400"
                src={user?.photoURL}
                alt={user?.displayName}
              />
            </div>
          ) : (
            <img src={userIcon} alt="Icon of user" />
          )}
        </div>
        {user ? (
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
