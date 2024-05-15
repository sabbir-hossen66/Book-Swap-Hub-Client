import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import BannerImg from "../../Components/BannerImg/BannerImg";
import Blogs from "../../Components/Blogs/Blogs";
import Contact from "../../Components/Contact/Contact";
import GroupMembers from "../../Components/GroupMembers/GroupMembers";
import Queries from "../Queries/Queries";


const Home = () => {
  return (
    <>
      <Helmet>
        <title>BookSwap || Home</title>
      </Helmet>
      <div className="max-w-screen-2xl mx-auto">
        <Banner></Banner>
      </div>
      <BannerImg></BannerImg>
      <Queries></Queries>
      <Blogs></Blogs>
      <GroupMembers></GroupMembers>
      <Contact></Contact>
    </>
  );
};

export default Home;