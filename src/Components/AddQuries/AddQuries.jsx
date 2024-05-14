import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";


const AddQuries = () => {

  const { user } = useContext(AuthContext)
  console.log(user);

  return (
    <div>
      <h2>You Can Add Here Any Quries</h2>
      <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-extrabold">Please Add Your Item</h2>
        <form>
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
                <input type="url" name="photo" placeholder="Drop Here Product Image-URL" className="input input-bordered w-full" />
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
                <input type="text" name="reasonDetails" placeholder="rating" className="input input-bordered w-full" />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Customization</span>
              </label>
              <label className="input-group">
                <input type="text" name="customization" placeholder="customization" className="input input-bordered w-full" />
              </label>
            </div>
          </div>
          {/* form Photo url row */}
          <div className="md:flex mb-8">
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
          </div>

          <input type="submit" value="Add Item Craft" className="btn btn-block relative py-3  overflow-hidden font-semibold rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-xl" />

        </form>
      </div>
    </div>
  );
};

export default AddQuries;