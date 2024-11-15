import bgImg from "../assets/bg.png";

const RightBG = () => {
    return (
        <div className="py-3 lg:block hidden">
            <img className="w-full" src={bgImg} alt="Background image of Right Nav" />
        </div>
    );
};

export default RightBG;