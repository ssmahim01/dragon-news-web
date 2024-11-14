import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
    const {userLogin, setUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();

        const form = new FormData(event.target);
        const email = form.get("email");
        const password = form.get("password");
        
        console.log({email, password});

        userLogin(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setUser(user);
            alert("Successfully Sign in");
            navigate("/");
        })

        .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log({errorCode, errorMessage});
            alert(errorCode);
        })
    };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center">Login your Account</h2>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
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
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral text-white font-semibold rounded-none">Login</button>
          </div>
        </form>
        <p className="text-center font-semibold">Don't Have An Account ? <Link to="/auth/register" className="text-rose-500">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;