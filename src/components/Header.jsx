import moment from "moment";
import logo from "../assets/logo.png";

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 py-6">
            <div className="logo">
                <img className="w-[340px]" src={logo} alt="Image of Logo" />
            </div>
            <h2 className="text-lg text-gray-400 font-medium">Journalism Without Fear or Favour</h2>
            <p className="text-gray-700 font-medium">{moment().format('MMMM Do YYYY, h:mm a')}</p>
        </div>
    );
};

export default Header;