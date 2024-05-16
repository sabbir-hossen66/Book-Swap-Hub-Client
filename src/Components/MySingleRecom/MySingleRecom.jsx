import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";


const MySingleRecom = ({ singleRecom }) => {
  const { user } = useContext(AuthContext)
  const { productName, queryTitle, recommenderEmail, recommenderName, currentTimeStamp, userEmail, userName, photoURL } = singleRecom;


  return (
    <div>
      <section >
        <div className="container px-6 py-10 mx-auto">
          <div>
            <div className="relative">
              <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={photoURL} alt="" />

              <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 ">
                <img className="object-cover object-center w-10 h-10 rounded-full" src={user?.photoURL} alt="" />

                <div className="mx-4">
                  <h1 className="text-sm text-gray-500 font-semibold ">{userName}</h1>

                </div>
              </div>
            </div>

            <h1 className="mt-6 text-xl font-semibold text-[#FB923C] hover:underline ">
              {queryTitle}
            </h1>

            <hr className="w-32 my-6 text-blue-500" />

            <p className="text-sm text-gray-700">PRODUCT_NAME: {productName} </p>
            <p className="text-sm text-gray-700">RECOMMEND_EMAIL: {recommenderEmail} </p>
            <p className="text-sm text-gray-700">RECOMMEND_NAME: {recommenderName} </p>
            <p className="text-sm text-gray-700">TIME: {currentTimeStamp} </p>
            <p className="text-sm text-gray-700">EMAIL: {userEmail} </p>
            {/* <p className="text-sm text-gray-700"> {userName} </p> */}



            <a href="#" className="inline-block mt-4 text-blue-500 underline hover:text-blue-400">Read more</a>
          </div>

        </div>

      </section>
    </div>
  );
};

export default MySingleRecom;