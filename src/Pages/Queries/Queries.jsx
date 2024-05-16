import { useEffect, useState } from "react";
import Query from "../../Components/Query/Query";
import { TypeAnimation } from "react-type-animation";


const Queries = () => {
  const [quries, setQuries] = useState([])
  const [textColor, setTextColor] = useState('red');

  const [isGridView, setIsGridView] = useState(true);



  useEffect(() => {
    fetch('https://book-swap-server.vercel.app/posts')
      .then(res => res.json())
      .then(data => {
        const sortedData = data.sort((a, b) => new Date(b.time) - new Date(a.time));
        const limitedData = sortedData.slice(0, 6);
        setQuries(limitedData);
      }

      )
  }, [])

  const toggleLayout = (layout) => {
    console.log('hello mama');
    setIsGridView(layout === 'grid');
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

      <div className="flex flex-col md:flex-row justify-center gap-2 mb-4 mt-4">
        <button onClick={() => toggleLayout('grid')}
          className="bg-[#FB923C] text-white font-semibold rounded-md p-3">Grid LayOut</button>
        <button onClick={() => toggleLayout('list')} className="bg-blue-500 text-white font-bold rounded-md p-3">Change LayOut</button>
      </div>

      {/* <div className="container mx-auto gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center my-16">
        {
          quries.map(singleQuery => <Query
            key={singleQuery.id}
            singleQuery={singleQuery}
          ></Query>)
        }
      </div> */}

      {/* another  layout */}
      <div>
        <div className={`container mx-auto gap-6 grid ${isGridView ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 lg:grid-cols-2'}  justify-center items-center my-16`}>
          {
            quries.map(singleQuery => <Query
              key={singleQuery.id}
              singleQuery={singleQuery}
            ></Query>)
          }
        </div>
      </div>
      {/* end list layout */}
    </div>
  );
};

export default Queries;