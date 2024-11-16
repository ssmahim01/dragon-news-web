import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNavbar from "../components/layout-component/RightNavbar";
import { FaArrowLeftLong } from "react-icons/fa6";

const NewsDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];

  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="lg:w-11/12 w-full mx-auto grid lg:grid-cols-12 gap-5">
        <section className="lg:col-span-9 lg:w-full w-11/12 mx-auto">
          <h2 className="text-xl font-bold mb-3">Dragon News</h2>

          <div className="card bg-base-100 border border-gray-200 rounded-xl">
            <figure className="pt-6 px-6">
              <img
                src={news?.image_url}
                className="w-full h-full rounded-lg"
              />
            </figure>
            <div className="card-body space-y-4">
              <h2 className="text-2xl text-[#403F3F] font-bold">{news?.title}</h2>
              <p className="text-[#706F6F] font-medium">{news?.details}</p>
              <div className="card-actions">
                <Link to={`/category/${news.category_id}`} className="btn bg-[#D72050] rounded-none md:px-8 text-white font-semibold"><span className="pt-1"><FaArrowLeftLong /></span> <span>Back to Category</span></Link>
              </div>
            </div>
          </div>
        </section>

        <aside className="lg:col-span-3 lg:w-full w-4/5 mx-auto">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;