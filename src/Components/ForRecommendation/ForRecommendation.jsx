import { useContext, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const ForRecommendation = () => {
  const { user } = useContext(AuthContext)

  const [textColor, setTextColor] = useState('red');

  const [formData, setFormData] = useState({
    queryId: '',
    queryTitle: '',
    productName: '',
    userEmail: '',
    userName: '',
    productPhoto: '',
    recommenderEmail: '',
    recommenderName: '',
    currentTimeStamp: '',
  });

  const handleChange = (e) => {
    e.preventDefault();

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to backend
    console.log(formData);
    // send data to server
    fetch('http://localhost:5000/recommendation', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'success!',
            text: 'Recommendation is done',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
          e.target.reset()
        }

      })


  };
  return (
    <div>
      <Helmet>
        <title>BookSwap || Recommendation</title>
      </Helmet>
      <div
        style={{
          fontSize: '35px',
          color: textColor,
          textAlign: "center",
          fontWeight: "bold"
          /* when working without ref and classNames, the manipulated style needs to be
           applied to the parent element, because the TypeAnimation component is perma-memoized */
        }}
      >
        <TypeAnimation
          sequence={[
            'This Is ',
            800,
            () => setTextColor('firebrick'),
            'This Is Recommendation',
            800,
            () => setTextColor('deeppink'),
            'This Is Recommendation Section',
            1000,
            () => setTextColor('blue'),
            '',
          ]}
          repeat={Infinity}
        />
      </div>

      <div className="max-w-screen-xl mx-auto my-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="queryId" className="block text-[#618CF6] font-semibold">Query ID:</label>
            <input type="text" id="queryId" name="queryId" value={formData.queryId} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="queryTitle" className="block text-[#618CF6] font-semibold">Query Title:</label>
            <input type="text" id="queryTitle" name="queryTitle" value={formData.queryTitle} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="productName" className="block text-[#618CF6] font-semibold">Product Name:</label>
            <input type="text" id="productName" name="productName" value={formData.productName} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="userEmail" className="block text-[#618CF6] font-semibold">User Email:</label>
            <input type="email" id="userEmail" name="userEmail" value={user?.userEmail} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="userName" className="block text-[#618CF6] font-semibold">User Name:</label>
            <input type="text" id="userName" name="userName" value={user?.userName} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full" />
          </div>
          <div className="mb-4">
            <label className="input-group">
              <input type="url" name="photoURL" placeholder="Drop Here Product Image-URL" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="recommenderEmail" className="block text-[#618CF6] font-semibold">Recommender Email:</label>
            <input type="email" id="recommenderEmail" name="recommenderEmail" value={formData.recommenderEmail} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="recommenderName" className="block text-[#618CF6] font-semibold">Recommender Name:</label>
            <input type="text" id="recommenderName" name="recommenderName" value={formData.recommenderName} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="currentTimeStamp" className="block text-[#618CF6] font-semibold ">Current Time-Stamp:</label>

            <input type="date" id="currentTimeStamp" name="currentTimeStamp" value={formData.currentTimeStamp} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full" />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ForRecommendation;