import "./style/Layout.css";
import Navbar from "./Navbar";
import { Myfooter } from "../components/Myfooter";
import { Outlet } from "react-router";
function Layout(){
    return (<>
    <header>
        <Navbar />
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
        <Myfooter/>
      </footer>
    </>);
}
export default Layout;