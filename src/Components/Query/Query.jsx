

const Query = ({ singleQuery }) => {
  const { brand_name, query_title, alternation_reason, date_posted, user_info, product_image, product_name } = singleQuery
  // console.log(brand_name, product_image, query_title, date_posted, product_name, user_info, alternation_reason);
  return (
    <div>
      <div className="max-w-2xl overflow-hidden  rounded-lg shadow-xl">
        <img className="object-cover w-full h-64" src={product_image} alt="Article" />

        <div className="p-6">
          <div>
            <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-500">{brand_name}</span>
            <a href="#" className="block mt-2 text-xl font-semibold text-[#FB923C] hover:underline" tabIndex="0" role="link">{query_title}</a>
            <p className="mt-2 text-sm text-gray-800 dark:text-gray-400"><span>Product_Name: </span> {product_name}</p>
          </div>

          <div className="mt-4">
            <div className="flex items-center">
              <div className="flex items-center">
                <img className="object-cover h-10 rounded-full" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar" />
                <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabIndex="0" role="link">Jone Doe</a>
              </div>
              <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">21 SEP 2015</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Query;