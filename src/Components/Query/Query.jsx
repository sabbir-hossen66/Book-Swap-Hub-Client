import { useEffect, useState } from "react";


const Query = ({ singleQuery }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // const { brand_name, query_title, alternation_reason, user_info, product_image, product_name } = singleQuery
  const { productName, brandProduct, title, boycot, productPhoto, userName, image, time } = singleQuery

  return (
    <div>
      <div className="max-w-2xl overflow-hidden  rounded-lg shadow-xl">
        <img className="object-cover w-full h-64" src={productPhoto} alt="Article" />

        <div className="p-6">
          <div>
            <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-500">{brandProduct}</span>
            <a href="#" className="block mt-2 text-xl font-semibold text-[#FB923C] hover:underline" tabIndex="0" role="link">{title}</a>
            <p className="mt-2 text-sm text-gray-800 dark:text-gray-400">product_name: <span className="text-blue-600 uppercase dark:text-blue-500 font-semibold">{productName}</span></p>
            <p className="mt-2 text-sm text-gray-800 dark:text-gray-400">alternation_reason: <span className="text-blue-600 uppercase dark:text-blue-500 font-semibold">{boycot}</span></p>
            <p className="mt-2 text-sm text-gray-800 dark:text-gray-400">date_posted: <span className="text-blue-600 uppercase dark:text-blue-500 font-semibold">{currentDate.toLocaleString()}</span></p>
          </div>

          <div className="mt-4">
            <div className="flex items-center">
              <div className="flex items-center">
                <img className="object-cover h-10 rounded-full" src={image} alt="Avatar" />
                <a href="#" className="mx-2 font-semibold text-[#FB923C] hover:underline" tabIndex="0" role="link">{userName}</a>
              </div>
              <span className="mx-1 text-xs dark:text-blue-500 font-semibold">{time}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Query;