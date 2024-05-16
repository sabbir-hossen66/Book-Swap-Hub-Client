import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";
import { Helmet } from "react-helmet-async";


const My_Query = () => {

  const { user } = useContext(AuthContext)

  const queryData = useLoaderData()
  console.log(queryData);
  const handleDelete = (_id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('delete ');
        fetch(`https://book-swap-server.vercel.app/posts/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your book has been deleted.",
                icon: "success"
              });
              // const remainingBooks = seeBooks.filter(singleDeleteBook => (singleDeleteBook._id) !== _id)
              // console.log(remainingBooks);
              // setSeeBooks(remainingBooks)
            }

          })
      }
    });

  }
  console.log(queryData);
  return (
    <>
      <Helmet>
        <title>BookSwap || MyQueries</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 gap-6">

        {
          queryData?.map((data) => data.email === user?.email && (
            <>
              <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden py-4 px-2">
                <div className="relative">
                  <img
                    className="w-full h-64 object-cover"
                    src={data.productPhoto}
                    alt="book cover"
                  />
                  <div className="absolute inset-0 bg-black opacity-25"></div>
                  {/* <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white font-semibold text-lg ">Book Title</p>
          </div> */}
                </div>
                <div className="px-6 py-4">
                  <div className="flex justify-between items-center">
                    <div >
                      <div className="font-bold text-xl mb-2 hover:underline cursor-pointer text-[#FB923C]"
                      >{data.title}</div>
                      <p className="text-gray-700 text-base ">product_name: <span className="font-medium text-[#618CF6]">{data.productName}</span></p>
                      <p className="text-gray-700 text-base ">product_brand: <span className="font-medium text-[#618CF6]">{data.brandProduct}</span></p>
                      <p className="text-gray-700 text-base ">boycot: <span className="font-medium text-[#618CF6]">{data.boycot}</span></p>


                    </div>
                    <div className="flex flex-col ml-6">
                      <Link to={`/detail-query/${data._id}`}>
                        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-6 rounded mb-2">
                          Details
                        </button>
                      </Link>
                      <Link to={`/update-query/${data._id}`}>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  px-6 rounded mb-2">
                          Update
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(data._id)}
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
                    src={user?.photoURL}
                    alt="User Avatar"
                  />
                  <div>
                    <div className="flex justify-center  items-center">
                      <p className="mx-2 font-semibold text-[#FB923C]">{user?.displayName}</p>
                      <p className="mx-1 text-xs font-medium text-[#618CF6]">{data.time}</p>
                    </div>
                    <p className="mx-1 text-xs font-medium text-[#618CF6]">{user?.email}</p>
                  </div>
                </div>

              </div>
            </>
          ))
        }


      </div>
    </>
  );
};

export default My_Query;