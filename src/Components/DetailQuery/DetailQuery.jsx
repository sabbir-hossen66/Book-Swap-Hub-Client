import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";


const DetailQuery = () => {
  const bookDetail = useLoaderData();
  const { user } = useContext(AuthContext)
  const { productName, brandProduct, title, boycot, productPhoto, email, userName, time } = bookDetail;
  return (
    <div>
      <h2 className="text-3xl text-center"> This is Detail Query Part</h2>

      <div className="max-w-3xl mx-auto h-96 bg-white shadow-lg rounded-lg overflow-hidden my-16 flex flex-col md:flex-row lg:flex-row">
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
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
              nec, ultricies sed, dolor. Cras elementum ultrices diam.
            </p>
          </div>

          {/* User profile */}
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src={user.photoURL}
              alt="User Avatar"
            />
            <div>
              <p className="text-gray-900 font-semibold">John Doe</p>
              <p className="text-gray-700 text-sm">Fantasy Enthusiast</p>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
};

export default DetailQuery;