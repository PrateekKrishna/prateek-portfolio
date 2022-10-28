import React from "react";
import "./footer.css"
import github from "./githubSVG.svg"
import instagram from "./instagramSVG.svg"
import linkedin from "./linkedinSVG.svg"

function Footer(){
    return(
        <div className="footer">
            <div className="ext-websites">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/PrateekKrishna"><img className="web-logo" alt="github logo" src={github}></img></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/prateekkrishna/"><img className="web-logo" alt="linkedin logo" src={linkedin}></img></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/prakrz/"><img className="web-logo" alt="instagram logo" src={instagram}></img></a>

            </div>
            <div className="copyright-info">
                <p className="copyright-txt">Created by Prateek Krishna Using React</p>
            </div>
        </div>
    );
}

export default Footer;