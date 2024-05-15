
import { useLoaderData } from "react-router-dom";
import SingleRecomData from "../SingleRecomData/SingleRecomData";


const SeeRecommendationData = () => {
  const recomData = useLoaderData()
  // const [seeRecomData,setSeeRecomData]=useState([])
  return (
    <div>
      <h2>Here You Can See All Recommendation:{recomData.length}</h2>
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