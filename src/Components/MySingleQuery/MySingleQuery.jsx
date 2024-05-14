

const MySingleQuery = ({ book }) => {
  const { productName, brandProduct, title, boycot, productPhoto, email, userName, image, time } = book;

  return (
    <div>

      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden py-4 px-2">
        <div className="relative">
          <img
            className="w-full h-64 object-cover"
            src={productPhoto}
            alt="book cover"
          />
          <div className="absolute inset-0 bg-black opacity-25"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white font-semibold text-lg ">Book Title</p>
          </div>
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
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2">
                Button 1
              </button>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-2">
                Button 2
              </button>
              <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                Button 3
              </button>
            </div>
          </div>
        </div>

        {/* set another  */}
        <div className="mt-4">
          <div className="flex items-center">
            <div className="flex items-center">
              <img className="object-cover h-10 rounded-full" src={image} alt="Avatar" />
              <a href="#" className="mx-2 font-semibold text-[#FB923C] " tabIndex="0" role="link">{userName}</a>
            </div>
            <span className="mx-1 text-xs font-medium text-[#618CF6]">{time}</span>

          </div>
          <p className="text-sm font-medium text-gray-700">email: <span className="text-[#618CF6]"> {email}</span></p>
        </div>

      </div>
    </div>
  );
};

export default MySingleQuery;