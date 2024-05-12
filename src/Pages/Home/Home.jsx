import Banner from "../../Components/Banner/Banner";
import BannerImg from "../../Components/BannerImg/BannerImg";
import Blogs from "../../Components/Blogs/Blogs";


const Home = () => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <Banner></Banner>
      </div>
      <BannerImg></BannerImg>
      <Blogs></Blogs>
    </>
  );
};

export default Home;