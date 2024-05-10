import Banner from "../../Components/Banner/Banner";
import BannerImg from "../../Components/BannerImg/BannerImg";


const Home = () => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <Banner></Banner>
      </div>

      <BannerImg></BannerImg>
    </>
  );
};

export default Home;