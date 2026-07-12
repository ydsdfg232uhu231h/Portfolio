import Theme from "../components/Themepage";
import "./style/Navbar.css";
import { NavLink } from "react-router";

function Navbar() {
    const isMyActive = ({ isActive }) => ({
        color: isActive ? "white" : "rgb(5, 65, 114)",
        backgroundColor: isActive ? "rgb(5, 65, 114)" : "transparent",
        padding: "10px", borderRadius: "10px"
    });
    return (
        <>
            <div className='navbar'>
                <div id="sy">
                    <img src="Myicon.png" width={"20px"} alt="image" />
                    <h1> Yuvraj Gupta</h1>
                </div>
                <ul>
                    <li><NavLink to={"/"} style={isMyActive}>Home</NavLink></li>
                    <li><NavLink to={"/about"} style={({ isActive }) => ({
                        color: isActive ? "white" : "rgb(5, 65, 114)",
                        backgroundColor: isActive ? "rgb(5, 65, 114)" : "transparent",
                        padding: "10px", borderRadius: "10px"
                    })}>About</NavLink></li>
                    <li> <NavLink to={"/project"} style={isMyActive}>Project</NavLink></li>
                    <li><NavLink to={"/skills"} style={({ isActive }) => ({
                        color: isActive ? "white" : "rgb(5, 65, 114)",
                        backgroundColor: isActive ? "rgb(5, 65, 114)" : "transparent",
                        padding: "10px", borderRadius: "10px"
                    })}>Skills</NavLink></li>
                    <li><NavLink to={"/contact"} style={isMyActive}>Contact</NavLink></li>
                </ul>

                <ul>
                    <li><Theme /></li>
                    <li><NavLink to={"/resume"} style={isMyActive}>Resume</NavLink></li>
                </ul>
            </div>
        </>
    )
}

export default Navbar