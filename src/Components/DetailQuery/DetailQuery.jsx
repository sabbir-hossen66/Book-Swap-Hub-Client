import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import ForRecommendation from "../ForRecommendation/ForRecommendation";
import Marquee from "react-fast-marquee";


const DetailQuery = () => {
  const bookDetail = useLoaderData();
  const { user, } = useContext(AuthContext)

  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const time = currentDate?.toLocaleString()
  const image = (user?.photoURL)
  const { productName, brandProduct, title, boycot, productPhoto } = bookDetail;



  return (
    <div>
      <Marquee direction="right" speed={200}>
        <h2 className="text-3xl text-center  text-[#618CF6] my-6 font-bold"> This is About Book Details</h2>
      </Marquee>
      <div>
        <div className="max-w-3xl mx-auto h-96 bg-white shadow-lg rounded-lg overflow-hidden my-16 flex flex-col md:flex-row lg:flex-row" data-aos="fade-down">
          {/* Image banner */}
          <img
            className="w-full md:w-1/2 lg:w-1/2 h-auto object-cover object-center"
            src={productPhoto}
            alt="Fantasy Banner"
          />

          {/* Text content */}
          <div className="flex flex-col justify-between w-full md:w-1/2 lg:w-1/2 px-6 py-4">
            <div>
              <h2 className="font-bold text-xl mb-2 hover:underline cursor-pointer text-[#FB923C]">{title}</h2>
              <p className="text-gray-700 text-base ">product_name: <span className="font-medium text-[#618CF6]">{productName}</span></p>
              <p className="text-gray-700 text-base ">brand_product: <span className="font-medium text-[#618CF6]">{brandProduct}</span></p>
              <p className="text-gray-700 text-base ">boycot: <span className="font-medium text-[#618CF6]">{boycot}</span></p>

            </div>

            {/* User profile */}
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src={image}
                alt="User Avatar"
              />
              <div>
                <div className="flex justify-center items-center">
                  <p className="mx-2 font-semibold text-[#FB923C]">{user?.displayName}</p>
                  <p className="mx-2 font-semibold text-[#618CF6]">{time}</p>
                </div>
                <p className="mx-1 text-xs font-medium text-[#618CF6]">{user?.email}</p>
              </div>
            </div>

          </div>
        </div>

        {/* add recommendation section */}

        <div>
          <ForRecommendation></ForRecommendation>
        </div>

      </div>
    </div>
  );
};

export default DetailQuery;