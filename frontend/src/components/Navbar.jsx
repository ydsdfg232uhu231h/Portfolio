import "./Navbar.css";

function Navbar() {
    return (
        <>
            <div className='navbar'>
                <div id="sy">
                    <img src="Myicon.png" width={"20px"} alt="image" />
                    <h1> Yuvraj Gupta</h1>
                </div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Project</li>
                    <li>skills</li>
                    <li>contect</li>
                </ul>

                <ul>
                    <li>theme</li>
                    <li>resume</li>
                </ul>
            </div>
        </>
    )
}

export default Navbar