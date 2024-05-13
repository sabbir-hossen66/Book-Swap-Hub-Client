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
      {
        quries.map(query => <Query
          key={query.id}
          query={query}
        ></Query>)
      }
    </div>
  );
};

export default Queries;