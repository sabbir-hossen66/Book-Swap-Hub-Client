import { useState } from "react";
import { TypeAnimation } from "react-type-animation";


const ForRecommendation = () => {
  const [textColor, setTextColor] = useState('red');
  const [formData, setFormData] = useState({
    queryId: '',
    queryTitle: '',
    productName: '',
    userEmail: '',
    userName: '',
    recommenderEmail: '',
    recommenderName: '',
    currentTimeStamp: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to backend
    console.log(formData);
  };
  return (
    <div>
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
            <input type="email" id="userEmail" name="userEmail" value={formData.userEmail} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="userName" className="block text-[#618CF6] font-semibold">User Name:</label>
            <input type="text" id="userName" name="userName" value={formData.userName} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full" />
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
            <input type="text" id="currentTimeStamp" name="currentTimeStamp" value={formData.currentTimeStamp} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full" />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ForRecommendation;