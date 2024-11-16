import swimmingImg from "../assets/swimming.png";
import classImg from "../assets/class.png";
import playgroundImg from "../assets/playground.png";

const QZone = () => {
    return (
        <div className="bg-[#F3F3F3] py-5 px-4 rounded-lg lg:w-full md:w-3/4 w-11/12 mx-auto">
            <h2 className="text-[#403F3F] md:text-2xl font-semibold mb-5">Q-Zone</h2>
            <div className="*:w-full space-y-5">
                <img src={swimmingImg} alt="Image of Swimming" />

                <img src={classImg} alt="Image of Classroom" />

                <img src={playgroundImg} alt="Image of Playground" />
            </div>
        </div>
    );
};

export default QZone;