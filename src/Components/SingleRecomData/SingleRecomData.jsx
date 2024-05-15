

const SingleRecomData = ({ singleRecomData }) => {
  const { productName, queryTitle, recommenderEmail, recommenderName, currentTimeStamp, userEmail, userName } = singleRecomData;
  console.log(queryTitle, productName);
  return (
    <div>
      {/* <div className="overflow-x-auto">
        <table className="table">
        
          <thead>
            <tr>
              <th>Produt Name</th>
              <th>Query Title</th>
              <th>Recommender Email</th>
              <th>Recommender Name</th>
              <th>Current TimeStamp</th>
              <th>User Email</th>
              <th>User Name</th>
            </tr>
          </thead>
          <tbody>
      
            <tr>

              <td>{productName}</td>
              <td>{queryTitle}</td>
              <td>{recommenderEmail}</td>
              <td>{recommenderName}</td>
              <td>{currentTimeStamp}</td>
              <td>{userEmail}</td>
              <td>{userName}</td>
            </tr>


          </tbody>
        </table>
      </div> */}

      {/* another table */}
      <div className="overflow-x-auto my-16">
        <table className="min-w-full bg-white border border-gray-200">
          {/* Head */}
          <thead className="hidden md:table-header-group bg-gray-200">
            <tr>
              <th className="px-6 py-3 border-b border-gray-200 text-center text-sm leading-4 text-gray-600 uppercase tracking-wider">Product Name</th>
              <th className="px-6 py-3 border-b border-gray-200 text-center text-sm leading-4 text-gray-600 uppercase tracking-wider">Query Title</th>
              <th className="px-6 py-3 border-b border-gray-200 text-center text-sm leading-4 text-gray-600 uppercase tracking-wider">Recommender Email</th>
              <th className="px-6 py-3 border-b border-gray-200 text-center text-sm leading-4 text-gray-600 uppercase tracking-wider">Recommender Name</th>
              <th className="px-6 py-3 border-b border-gray-200 text-center text-sm leading-4 text-gray-600 uppercase tracking-wider">Current TimeStamp</th>
              <th className="px-6 py-3 border-b border-gray-200 text-center text-sm leading-4 text-gray-600 uppercase tracking-wider">User Email</th>
              <th className="px-6 py-3 border-b border-gray-200 text-center text-sm leading-4 text-gray-600 uppercase tracking-wider">User Name</th>
            </tr>
          </thead>
          {/* Body */}
          <tbody>
            <tr className="bg-gray-100 md:bg-white md:border-b md:border-gray-200">
              <td className="block md:table-cell px-6 py-4 border-b border-gray-200 text-center text-sm leading-5 text-gray-700">
                <span className="block md:hidden font-bold">Product Name: </span>{productName}
              </td>
              <td className="block md:table-cell px-6 py-4 border-b border-gray-200 text-center text-sm leading-5 text-gray-700">
                <span className="block md:hidden font-bold">Query Title: </span>{queryTitle}
              </td>
              <td className="block md:table-cell px-6 py-4 border-b border-gray-200 text-center text-sm leading-5 text-gray-700">
                <span className="block md:hidden font-bold">Recommender Email: </span>{recommenderEmail}
              </td>
              <td className="block md:table-cell px-6 py-4 border-b border-gray-200 text-center text-sm leading-5 text-gray-700">
                <span className="block md:hidden font-bold">Recommender Name: </span>{recommenderName}
              </td>
              <td className="block md:table-cell px-6 py-4 border-b border-gray-200 text-center text-sm leading-5 text-gray-700">
                <span className="block md:hidden font-bold">Current TimeStamp: </span>{currentTimeStamp}
              </td>
              <td className="block md:table-cell px-6 py-4 border-b border-gray-200 text-center text-sm leading-5 text-gray-700">
                <span className="block md:hidden font-bold">User Email: </span>{userEmail}
              </td>
              <td className="block md:table-cell px-6 py-4 border-b border-gray-200 text-center text-sm leading-5 text-gray-700">
                <span className="block md:hidden font-bold">User Name: </span>{userName}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SingleRecomData;