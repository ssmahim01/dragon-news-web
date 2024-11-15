import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
    const{ data:news } = useLoaderData();
    // console.log(data:news);

    return (
        <div>
            <h2 className="font-semibold mb-3">Dragon News Home</h2>
            <p className="text-amber-500 font-semibold">{news.length} News found on this Category</p>

            <div>
                {
                    news.map(singleNews => (
                       <NewsCard key={singleNews._id} news={singleNews}></NewsCard> 
                    ))
                }
            </div>
        </div>
    );
};

export default CategoryNews;