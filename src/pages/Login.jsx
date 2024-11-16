import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { userLogin, setUser, userResetEmail } = useContext(AuthContext);
  const [error, setError] = useState({});
  const emailRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    const form = new FormData(event.target);
    const email = form.get("email");
    const password = form.get("password");

    // console.log({ email, password });

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        setUser(user);
        toast.success(`${user.displayName} successfully Login`, {
          position: "top-center"
        });
        navigate(location?.state ? location.state : "/");
      })

      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        toast.error("Login Failed");

        // console.log({ errorCode, errorMessage });
        setError({ ...error, login: errorCode });
      });
  };

  const handleForgetPassword = () => {
    const emailField = emailRef.current.value;
    if(emailField){
      userResetEmail(emailField)
      .then(() => {
        toast.success("Sent Reset Email", {
          position: "top-center"
        });
      })
    }
    else{
      toast.error("Provide a valid email address");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center">
          Login your Account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              ref={emailRef}
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />

            {error.login && <label className="label text-xs text-rose-500 font-semibold">{error.login}</label>}

            <label className="label">
              <a onClick={handleForgetPassword} className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral text-white font-semibold rounded-none">
              Login
            </button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Don't Have An Account ?{" "}
          <Link to="/auth/register" className="text-rose-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;