import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return <div className="flex items-center gap-4 my-5 p-5 bg-[#F3F3F3] rounded-lg">
    <p className="bg-[#D72050] text-base-100 px-4 py-2">Latest</p>
    <Marquee pauseOnHover={true} speed={100} className="space-x-8">
        <Link to="/category/01" className="text-gray-700 font-semibold">
        Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
        </Link>
        <Link to="/category/02" className="text-gray-700 font-semibold">
        Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
        </Link>
        <Link to="/category/03" className="text-gray-700 font-semibold">
        Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
        </Link>
    </Marquee>
  </div>;
};

export default LatestNews;