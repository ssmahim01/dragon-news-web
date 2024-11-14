import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="pb-3">
      <h2 className="text-gray-600 font-semibold mb-3">Find Us On</h2>
      <div className="join flex *:bg-base-100 join-vertical">
        <button className="btn join-item lg:justify-start">
            <span className="text-lg text-blue-600 rounded-full p-1 bg-gray-300"><FaFacebook></FaFacebook></span>
            <span className="text-gray-600 font-semibold">Facebook</span>
        </button>

        <button className="btn join-item lg:justify-start">
            <span className="text-lg text-blue-400 rounded-full p-1 bg-gray-300"><FaTwitter></FaTwitter></span>
            <span className="text-gray-600 font-semibold">Twitter</span>
        </button>

        <button className="btn join-item lg:justify-start">
            <span className="text-lg text-rose-500 rounded-full p-1 bg-gray-300"><FaInstagram></FaInstagram></span>
            <span className="text-gray-600 font-semibold">Instagram</span>
        </button>
      </div>
    </div>
  );
};

export default FindUs;