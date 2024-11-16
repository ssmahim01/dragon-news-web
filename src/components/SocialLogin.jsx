import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const SocialLogin = () => {
  const { logInWithGoogle, user, logInWithGithub } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    logInWithGoogle()
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        toast.success(`${user.displayName} successfully Login`, {
          position: "top-center"
        });
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        toast.error("Login Failed");
      });
  };

  const handleGitHubLogin = () => {
    logInWithGithub()
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        toast.success(`${user.displayName} successfully Login`, {
          position: "top-center"
        });
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        toast.error("Login Failed");
        // ...
      });
  };

  return (
    <div>
      {!user && (
        <div className="*:w-full space-y-3">
          <h2 className="font-semibold mb-3">Login With</h2>
          <button
            onClick={handleGoogleLogin}
            className="btn border-2 border-blue-500 rounded-lg"
          >
            <span className="text-lg">
              <FcGoogle></FcGoogle>
            </span>
            <span className="text-blue-500 font-semibold">
              Login With Google
            </span>
          </button>
          <button
            onClick={handleGitHubLogin}
            className="btn border-2 border-gray-500 rounded-lg"
          >
            <span className="text-lg">
              <ImGithub />
            </span>
            <span className="text-gray-500 font-semibold">
              Login With Github
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default SocialLogin;
