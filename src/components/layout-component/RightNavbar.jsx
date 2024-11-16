import { useContext } from "react";
import FindUs from "../FindUs";
import QZone from "../QZone";
import RightBG from "../RightBG";
import SocialLogin from "../SocialLogin";
import { AuthContext } from "../../provider/AuthProvider";

const RightNavbar = () => {
    const {user} = useContext(AuthContext);
    
    return (
        <div className="space-y-5">
           <section className="hidden lg:block space-y-4">
           <SocialLogin></SocialLogin>
           {!user && <FindUs></FindUs>}
           </section>
           <QZone></QZone>
           <RightBG></RightBG>
        </div>
    );
};

export default RightNavbar;