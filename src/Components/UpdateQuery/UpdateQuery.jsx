import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";
import Marquee from "react-fast-marquee";


const UpdateQuery = () => {
  const { user } = useContext(AuthContext)
  const book = useLoaderData()
  const { _id, productName, brandProduct, title, boycot, productPhoto } = book;

  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleUpdateQurey = event => {
    event.preventDefault();

    const form = event.target;

    const productName = form.name.value;
    const brandProduct = form.brandName.value;
    const productPhoto = form.photoURL.value;
    const title = form.queryTitle.value;
    const boycot = form.reasonDetails.value
    const email = user.email;
    const userName = user.displayName;
    const image = user.photoURL
    const time = currentDate.toLocaleString()

    const updateQuries = { productName, brandProduct, title, boycot, productPhoto, email, userName, image, time }

    console.log(updateQuries);

    // send data to the server
    fetch(`http://localhost:5000/posts/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updateQuries)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'success',
            text: 'Update Successfully',
            icon: 'success',
            confirmButtonText: 'OK'
          })
          event.target.reset()
        }
      })
  }


  return (
    <div>
      <Marquee speed={200} direction={'right'}>
        <h2 className="font-bold text-3xl text-center my-8 text-purple-500">This Is Update Quries Part </h2>
      </Marquee>
      <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-extrabold hover:underline cursor-pointer text-[#FB923C]">Please Update Your Quries</h2>
        <form onSubmit={handleUpdateQurey}>
          {/* form name and quantity row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Product_Name</span>
              </label>
              <label className="input-group">
                <input type="text" name="name" defaultValue={productName} placeholder="Type Your Product Name" className="input input-bordered w-full" />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Product_Brand</span>
              </label>
              <label className="input-group">
                <input type="text" name="brandName" defaultValue={brandProduct} placeholder="Type Your SubCategory Name" className="input input-bordered w-full" />
              </label>
            </div>
          </div>
          {/* form supplier row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Product Image-URL</span>
              </label>
              <label className="input-group">
                <input type="url" name="photoURL" defaultValue={productPhoto} placeholder="Drop Here Product Image-URL" className="input input-bordered w-full" />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Query_Title</span>
              </label>
              <label className="input-group">
                <input type="text" name="queryTitle" defaultValue={title} placeholder="Type Here Query Title" className="input input-bordered w-full" />
              </label>
            </div>
          </div>
          {/* form category and details row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Boycotting Reason Details</span>
              </label>
              <label className="input-group">
                <input type="text" name="reasonDetails" defaultValue={boycot} placeholder="Details here" className="input input-bordered w-full" />
              </label>
            </div>

          </div>


          <input type="submit" value="Submit Your Quries" className="btn btn-block  py-3  overflow-hidden font-semibold rounded bg-[#FB923C] hover:bg-purple-600 text-white text-xl" />

        </form>
      </div>
    </div>
  );
};

export default UpdateQuery;