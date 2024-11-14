import { useLoaderData } from "react-router-dom";

const CategoryNews = () => {
    const{ data } = useLoaderData();
    // console.log(data);

    return (
        <div>
            <h2 className="font-semibold mb-3">Dragon News Home</h2>
        </div>
    );
};

export default CategoryNews;