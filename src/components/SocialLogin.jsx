import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Login With</h2>
      <div className="*:w-full space-y-3">
        <button className="btn border-2 border-blue-500 rounded-lg">
          <span className="text-lg"><FcGoogle></FcGoogle></span>
          <span className="text-blue-500 font-semibold">Login With Google</span>
        </button>
        <button className="btn border-2 border-gray-500 rounded-lg">
          <span className="text-lg"><ImGithub /></span>
           <span className="text-gray-500 font-semibold">Login With Github</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;