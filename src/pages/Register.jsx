import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Get form data
    const form = new FormData(e.target);
    const name = form.get("name");
    if (name.length < 5) {
      setError({ ...error, name: "Must be more than 5 character long" });
      return;
    }

    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    if (password.length < 6) {
      setError({ ...error, password: "Must be 6 character or long" });
      return;
    }

    // console.log({ name, photo, email, password });

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        setUser(user);
        toast.success(`${user.displayName} successfully Registered`);
        updateUserProfile({displayName:name, photoURL:photo})
        .then(() => {
          navigate("/");
        })
        .catch(err => {
          // console.log(err);
          toast.error("User profile update is failed");
        })
      })

      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;

        // console.log(errorCode, errorMessage);
        toast.error("Failed to Register");
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center">
          Register your Account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>

          {error.name && (
            <label className="label text-xs text-rose-500 font-semibold">
              {error.name}
            </label>
          )}

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>
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
          </div>

          {error.password && (
            <label className="label text-xs text-rose-500 font-semibold">
              {error.password}
            </label>
          )}

          <div className="form-control mt-6">
            <button className="btn btn-neutral text-white font-semibold rounded-none">
              Register
            </button>
          </div>
        </form>

        <p className="text-center font-semibold">
          Already Have An Account ?{" "}
          <Link to="/auth/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
