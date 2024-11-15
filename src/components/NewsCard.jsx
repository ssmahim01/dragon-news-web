import { AiFillEye } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import { FaRegBookmark, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsCard = (props = {}) => {
    const { news } = props || {};

    return (
        <div className="my-6 md:w-full w-11/12 mx-auto bg-white border rounded-lg shadow-md overflow-hidden">
        {/* Author section */}
        <div className="flex justify-between items-center p-4 bg-gray-100">
            <div className="flex items-center">
                <img
                    className="w-10 h-10 rounded-full"
                    src={news.author.img}
                    alt={news.author.name}
                />
                <div className="ml-3">
                    <p className="text-gray-800 font-semibold">{news.author.name}</p>
                    <p className="text-gray-500 text-sm">{new Date(news.author.published_date).toISOString().split('T')[0]}</p>
                </div>
            </div>
            <div className="flex space-x-3 text-gray-500">
                <FaRegBookmark className="cursor-pointer" />
                <FaShareAlt className="cursor-pointer" />
            </div>
        </div>

        <div>
        <h2 className="pl-4 md:pr-40 pr-5 pt-5 text-xl font-bold text-gray-900 mb-2">{news.title}</h2>
        </div>

       {/* Image */}
        <img
            className="pt-6 w-full p-4 h-full object-cover rounded-lg"
            src={news.image_url}
            alt="News Thumbnail"
        />

        {/* Content */}
        <div className="p-4">
            
            <p className="text-gray-500 font-medium mb-4">
                {news.details.length > 100 ? news.details.substring(0, 250) + "..." : news.details}
                <Link to={`/news/${news._id}`} className="text-orange-500 font-semibold ml-1">Read More</Link>
            </p>
            
            {/* Rating and Views */}
            <div className="flex items-center justify-between text-gray-700 mt-4">
                <div className="flex items-center">
                    <AiFillStar className="text-yellow-500" />
                    <AiFillStar className="text-yellow-500" />
                    <AiFillStar className="text-yellow-500" />
                    <AiFillStar className="text-yellow-500" />
                    <AiFillStar className="text-yellow-200" />
                    <span className="ml-1 font-bold">{news.rating.number}</span>
                </div>
                <div className="flex items-center">
                    <AiFillEye className="text-gray-600" />
                    <span className="ml-1 text-gray-800">{news.total_view}</span>
                </div>
            </div>
        </div>
    </div>
    );
};

export default NewsCard;