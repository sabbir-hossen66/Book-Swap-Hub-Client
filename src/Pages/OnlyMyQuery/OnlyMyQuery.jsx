import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Link } from "react-router-dom";





const OnlyMyQuery = ({ onlySingleQuery }) => {

  const { user } = useContext(AuthContext)
  console.log(user);

  const { _id, productName, brandProduct, title, boycot, productPhoto, email, userName, image, time } = onlySingleQuery;

  return (
    <div>
      <div>

        <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden py-4 px-2">
          <div className="relative">
            <img
              className="w-full h-64 object-cover"
              src={productPhoto}
              alt="book cover"
            />
            <div className="absolute inset-0 bg-black opacity-25"></div>
            {/* <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white font-semibold text-lg ">Book Title</p>
          </div> */}
          </div>
          <div className="px-6 py-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-bold text-xl mb-2 hover:underline cursor-pointer text-[#FB923C]"
                >{title}</div>
                <p className="text-gray-700 text-base ">product_name: <span className="font-medium text-[#618CF6]">{productName}</span></p>
                <p className="text-gray-700 text-base ">product_brand: <span className="font-medium text-[#618CF6]">{brandProduct}</span></p>
                <p className="text-gray-700 text-base ">boycot: <span className="font-medium text-[#618CF6]">{boycot}</span></p>


              </div>
              <div className="flex flex-col">
                <Link to={`/detail-query/${_id}`}>
                  <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-6 rounded mb-2">
                    Details
                  </button>
                </Link>
                <Link to={`/update-query/${_id}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  px-6 rounded mb-2">
                    Update
                  </button>
                </Link>
                <button

                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2  px-6 rounded">
                  Delete
                </button>
              </div>
            </div>
          </div>

          {/* start another */}
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src={image}
              alt="User Avatar"
            />
            <div>
              <div className="flex justify-center  items-center">
                <p className="mx-2 font-semibold text-[#FB923C]">{userName}</p>
                <p className="mx-1 text-xs font-medium text-[#618CF6]">{time}</p>
              </div>
              <p className="mx-1 text-xs font-medium text-[#618CF6]">{email}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OnlyMyQuery;

















