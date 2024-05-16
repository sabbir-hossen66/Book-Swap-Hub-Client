import { useLoaderData } from "react-router-dom";
import MySingleRecom from "../../Components/MySingleRecom/MySingleRecom";


const MyRecommendation = () => {
  const myRecom = useLoaderData()
  console.log(myRecom);
  return (
    <div>
      <div className="text-center my-6">
        <h1 className="text-2xl font-semibold text-[#FB923C] hover:underline capitalize lg:text-3xl ">This is My Recommendation</h1>

        <p className="max-w-lg mx-auto mt-4 text-gray-700">
          It is therefore without reservations that I recommend him to you for any residency program that he may be seeking. I am sure he will be a valuable asset to your organization.
        </p>
      </div>

      {/* <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3"> */}

      {
        myRecom.map(singleRecom => <MySingleRecom
          key={singleRecom._id}
          singleRecom={singleRecom}
        ></MySingleRecom>)
      }
      {/* </div> */}

    </div>
  );
};

export default MyRecommendation;