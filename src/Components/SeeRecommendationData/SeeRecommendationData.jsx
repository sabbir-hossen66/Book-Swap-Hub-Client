
import { useLoaderData } from "react-router-dom";
import SingleRecomData from "../SingleRecomData/SingleRecomData";
import { Helmet } from "react-helmet-async";


const SeeRecommendationData = () => {
  const recomData = useLoaderData()
  // const [seeRecomData,setSeeRecomData]=useState([])
  return (
    <div>
      <Helmet>
        <title>BookSwap || Recommendation</title>
      </Helmet>
      <h2 className="text-center text-3xl font-semibold text-[#FB923C] hover:underline mt-6">Here You Can See All Recommendation</h2>
      <div>
        {
          recomData.map(singleRecomData => <SingleRecomData
            key={singleRecomData._id}
            singleRecomData={singleRecomData}
          ></SingleRecomData>)
        }
      </div>
    </div>
  );
};

export default SeeRecommendationData;