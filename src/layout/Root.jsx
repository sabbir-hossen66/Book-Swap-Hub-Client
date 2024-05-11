import { Outlet } from "react-router-dom";
import Nav from "../Shared/Nav/Nav";
import Footer from "../Shared/Footer/Footer";


const Root = () => {
  return (
    <div className="font-montserrat">
      <Nav></Nav>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;