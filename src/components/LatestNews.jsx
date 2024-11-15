import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);

  return <div className="flex items-center gap-4 my-5 p-5 bg-[#F3F3F3] rounded-lg">
    <p className="bg-[#D72050] text-base-100 px-4 py-2">Latest</p>
    <Marquee pauseOnHover={true} speed={100}>
        {categories.map(category => <Link key={category.category_id} to={`/category/${category.category_id}`} className="text-gray-700 font-semibold ml-12">{category.category_name}</Link>)}
    </Marquee>
  </div>;
};

export default LatestNews;