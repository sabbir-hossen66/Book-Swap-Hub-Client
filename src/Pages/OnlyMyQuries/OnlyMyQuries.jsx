import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import OnlyMyQuery from "../OnlyMyQuery/OnlyMyQuery";



const OnlyMyQuries = () => {
  const [onlyQuries, setOnlyQuries] = useState([]);
  const { user } = useContext(AuthContext)
  console.log(user);


  useEffect(() => {
    // fetch(`http://localhost:5000/posts/${user?.email}`)
    fetch(`http://localhost:5000/posts`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setOnlyQuries(data)
      })

  }, [user])
  console.log(onlyQuries);
  return (
    <div>
      <h2>Hello this is my quries</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-16">
        {
          onlyQuries.map(onlySingleQuery => <OnlyMyQuery
            key={onlySingleQuery._id}
            onlySingleQuery={onlySingleQuery}
          ></OnlyMyQuery>)
        }
      </div>
    </div>
  );
};

export default OnlyMyQuries;






