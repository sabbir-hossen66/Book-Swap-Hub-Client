import { useEffect, useState } from "react";
import Query from "../../Components/Query/Query";
import { TypeAnimation } from "react-type-animation";


const Queries = () => {
  const [quries, setQuries] = useState([])
  const [textColor, setTextColor] = useState('red');

  useEffect(() => {
    // fetch('/api.json')
    fetch('http://localhost:5000/posts')
      .then(res => res.json())
      .then(data => {
        const sortedData = data.sort((a, b) => new Date(b.time) - new Date(a.time));
        const limitedData = sortedData.slice(0, 6);
        setQuries(limitedData);
      }

      )
  }, [])
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
            () => setTextColor('deeppink'),
            'This Is Quries',
            800,
            () => setTextColor('red'),
            'This Is Quries Part',
            1000,
            () => setTextColor('[#FB923C]'),
            '',
          ]}
          repeat={Infinity}
        />
      </div>
      <div className="container mx-auto gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center my-16">
        {
          quries.map(singleQuery => <Query
            key={singleQuery.id}
            singleQuery={singleQuery}
          ></Query>)
        }
      </div>
    </div>
  );
};

export default Queries;