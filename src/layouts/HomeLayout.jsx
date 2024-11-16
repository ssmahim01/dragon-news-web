import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layout-component/leftNavbar";
import RightNavbar from "../components/layout-component/RightNavbar";
import Navbar from "../components/Navbar";
import Loading from "../pages/Loading";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import SocialLogin from "../components/SocialLogin";
import FindUs from "../components/FindUs";

const HomeLayout = () => {
  const {user, loading} = useContext(AuthContext);

  if(loading){
    return <Loading></Loading>
  };
  
  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav className="w-11/12 mx-auto py-4">
        <Navbar></Navbar>
      </nav>

      <main className="w-11/12 mx-auto py-5 lg:grid lg:grid-cols-12 gap-6 space-y-12 lg:space-y-0">
        <aside className="left lg:col-span-3 lg:w-full w-11/12 mx-auto">
          <LeftNavbar></LeftNavbar>
          <div className="block lg:hidden space-y-5">
          <SocialLogin></SocialLogin>
          {!user && <FindUs></FindUs>}
          </div>
        </aside>
        <section className="lg:col-span-6"><Outlet></Outlet></section>
        <aside className="lg:col-span-3 lg:w-full w-4/5 mx-auto">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;