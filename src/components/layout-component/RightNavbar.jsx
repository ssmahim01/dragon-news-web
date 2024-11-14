import FindUs from "../FindUs";
import QZone from "../QZone";
import RightBG from "../RightBG";
import SocialLogin from "../SocialLogin";

const RightNavbar = () => {
    return (
        <div className="space-y-5">
           <SocialLogin></SocialLogin>
           <FindUs></FindUs>
           <QZone></QZone>
           <RightBG></RightBG>
        </div>
    );
};

export default RightNavbar;