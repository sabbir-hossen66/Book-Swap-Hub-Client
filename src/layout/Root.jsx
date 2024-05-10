import { Outlet } from "react-router-dom";
import Nav from "../Shared/Nav/Nav";


const Root = () => {
  return (
    <div className="font-montserrat">
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;