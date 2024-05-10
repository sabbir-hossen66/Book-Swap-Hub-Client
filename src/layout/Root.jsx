import { Outlet } from "react-router-dom";
import Nav from "../Shared/Nav/Nav";


const Root = () => {
  return (
    <div className="font-montserrat">
      <Nav></Nav>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;