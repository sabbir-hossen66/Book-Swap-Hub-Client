import { useEffect, useState } from "react";
import Query from "../../Components/Query/Query";


const Queries = () => {
  const [quries, setQuries] = useState([])

  useEffect(() => {
    fetch('/api.json')
      .then(res => res.json())
      .then(data => setQuries(data))
  }, [])
  return (
    <div>
      <h2>BookHub Quries:</h2>
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