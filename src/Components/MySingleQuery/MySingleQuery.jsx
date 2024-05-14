

const MySingleQuery = ({ book }) => {
  const { productName, brandProduct, title, boycot, productPhoto, email, userName, image, time } = book;
  console.log(productName);
  return (
    <div>
      <h2>This is single query:{productName}</h2>
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative">
          <img
            className="w-full h-64 object-cover"
            src="https://via.placeholder.com/500"
            alt="book cover"
          />
          <div className="absolute inset-0 bg-black opacity-25"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white font-semibold text-lg">Book Title</p>
          </div>
        </div>
        <div className="px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <div className="font-bold text-xl mb-2">Book Title</div>
              <p className="text-gray-700 text-base">
                Some description about the book goes here. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.
              </p>
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
      </div>
    </div>
  );
};

export default MySingleQuery;