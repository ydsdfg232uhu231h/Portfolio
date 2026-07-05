import "./Myfooter.css";

export function Myfooter() {
    return <>
        <div className="c" id="ifs">
            <div className="r">
                <div className="c ifd">
                    <h3>Yuvraj Gupta</h3>
                    <p>Computer Engineering at BMCET, passionate about innovative web application and android application.</p>
                </div>
                <div className="c ifd">
                    <h3>Quick Link</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Project</li>
                        <li>skills</li>
                        <li>contect</li>
                    </ul>
                </div>
                <div className="c ifd">
                    <h3>Get In Touch</h3>
                    <ul>
                        <li>📧 yuvrajgupta90334@gmail.com</li>
                        <li>☏ 7874772287</li>
                        <li><ol>
                            <li><img src="github.png" id="github" alt="not found" /> </li>
                            <li><img src="linkedin.png" id="linkedin" alt="not found" /> </li>
                            <li><img src="instagram.png" id="instagram" alt="not found" /></li>
                            </ol></li>
                    </ul>
                </div>
            </div>
            <div id="lf">
                <hr />
                <p>© 2026 Yuvraj Gupta. All rights reserved. Built with React.js, css & Node.js.</p>
            </div>

        </div>

    </>;
}