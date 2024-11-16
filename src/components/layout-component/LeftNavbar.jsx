import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);

  return (
    <div>
      <h2 className="font-semibold">All Category ({categories.length})</h2>
      <div className="flex lg:flex-col lg:flex-nowrap flex-wrap lg:justify-start justify-center gap-2 my-8">
        {categories.map((category) => (
          <NavLink to={`/category/${category.category_id}`} key={category.category_id} className={({isActive}) => `btn ${isActive? "btn-accent text-white" : "btn-ghost"}`}>{category.category_name}</NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;