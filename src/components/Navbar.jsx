import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <div className=""></div>
            <div className="nav space-x-5 font-semibold">
                <Link to="/">Home</Link>
                <Link to="/career">Career</Link>
                <Link to="/about">About</Link>
            </div>
            <div className="login flex gap-2 items-center">
                <div>
                    <img src={userIcon} alt="Icon of user" />
                </div>
                    <button className="btn btn-neutral rounded-none text-white font-semibold">Login</button>
            </div>
        </div>
    );
};

export default Navbar;