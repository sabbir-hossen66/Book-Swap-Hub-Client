import Banner from "../../Components/Banner/Banner";
import BannerImg from "../../Components/BannerImg/BannerImg";
import Blogs from "../../Components/Blogs/Blogs";
import Contact from "../../Components/Contact/Contact";
import GroupMembers from "../../Components/GroupMembers/GroupMembers";


const Home = () => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <Banner></Banner>
      </div>
      <BannerImg></BannerImg>
      <Blogs></Blogs>
      <GroupMembers></GroupMembers>
      <Contact></Contact>
    </>
  );
};

export default Home;