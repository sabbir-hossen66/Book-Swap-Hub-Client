import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import Marquee from "react-fast-marquee";
import { Helmet } from "react-helmet-async";


const AddQuries = () => {
  const { user } = useContext(AuthContext)
  // Time and date set
  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);


  const handleBooksQuries = event => {
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

    const addQuries = { productName, brandProduct, title, boycot, productPhoto, email, userName, image, time }

    console.log(addQuries);

    // send data to the server
    fetch('http://localhost:5000/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(addQuries)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'success',
            text: 'Add Quries Successfully',
            icon: 'success',
            confirmButtonText: 'OK'
          })
          event.target.reset()
        }
      })
  }

  return (
    <div>
      <Helmet>
        <title>BookSwap || AddQuries</title>
      </Helmet>

      <Marquee speed={200} direction={'right'}>
        <h2 className="font-bold text-3xl text-center my-8 text-purple-500">This Is Add Quries Part </h2>
      </Marquee>
      <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-extrabold">Please Add Your Quries</h2>
        <form onSubmit={handleBooksQuries}>
          {/* form name and quantity row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Product_Name</span>
              </label>
              <label className="input-group">
                <input type="text" name="name" placeholder="Type Your Product Name" className="input input-bordered w-full" />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Product_Brand</span>
              </label>
              <label className="input-group">
                <input type="text" name="brandName" placeholder="Type Your SubCategory Name" className="input input-bordered w-full" />
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
                <input type="url" name="photoURL" placeholder="Drop Here Product Image-URL" className="input input-bordered w-full" />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Query_Title</span>
              </label>
              <label className="input-group">
                <input type="text" name="queryTitle" placeholder="Type Here Query Title" className="input input-bordered w-full" />
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
                <input type="text" name="reasonDetails" placeholder="Details here" className="input input-bordered w-full" />
              </label>
            </div>
            {/* <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Customization</span>
              </label>
              <label className="input-group">
                <input type="text" name="customization" placeholder="customization" className="input input-bordered w-full" />
              </label>
            </div> */}
          </div>
          {/* form Photo url row */}
          {/* <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input type="url" name="photo" placeholder="photo url" className="input input-bordered w-full" />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Processing Time</span>
              </label>
              <label className="input-group">
                <input type="text" name="time" placeholder="processing time" className="input input-bordered w-full" />
              </label>
            </div>
          </div> */}

          <input type="submit" value="Submit Your Quries" className="btn btn-block  py-3  overflow-hidden font-semibold rounded bg-[#FB923C] hover:bg-purple-600 text-white text-xl" />

        </form>
      </div>
    </div>
  );
};

export default AddQuries;