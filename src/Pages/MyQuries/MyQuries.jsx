import { useState } from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";



const MyQuries = () => {
  const [textColor, setTextColor] = useState('red');

  return (
    <div>
      {/* <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-4xl font-semibold text-center">This is My quries</h2> */}
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
            () => setTextColor('deeppink'),
            'This Is My Quries',
            800,
            () => setTextColor('blue'),
            'This Is My Quries Part',
            1000,
            () => setTextColor('goldenrod'),
            '',
          ]}
          repeat={Infinity}
        />
      </div>
      {/* stylishling react typer finished */}


      {/* go to add quries page */}
      <Link to={'/add-quries'}>
        <button className="mx-auto block bg-[#FB923C] hover:bg-purple-600 px-8 py-4 rounded text-white border-none font-bold my-8">Go To Add Quries Page</button>
      </Link>
    </div>
  );
};

export default MyQuries;