import { useState } from "react";
import "./navbar.css";
import logo from "../assects/logo.png"

function Navbar(){

    var [menu, setMenu] = useState(false);

    function handleClick(){
        setMenu(menu = !menu);
    }
    function refresh(){
        window.location.reload(true);
    }
    
 return(
        <nav className = "main-nav">
            <div className="logo">
                <h2> <a href="/" onClick={refresh}> <img alt="PK logo" src = {logo} height="30px" width="30px" /></a></h2>
            </div>
            <div className="menu-link">
                <ul id="navbar" className= { menu ? "#navbar active" : "#navbar"}>
                    <li>
                        <a href="#landingPage">Home</a>
                    </li>
                    <li>
                        <a href="#aboutPage">About</a>
                    </li>
                    <li>
                        <a href="#EduPage">Education</a>
                    </li>
                    <li>
                        <a href="#SkillsPage">Skills</a>
                    </li>
                    <li>
                        <a href="#ProjectsPage">Projects</a>
                    </li>
                    <li>
                        <a href="#CodeforcesPage">Codeforces</a>
                    </li>
                    <li>
                        <a href="#footerPage">Contact</a>
                    </li>
                </ul>
            </div>
            <div id="mobile">
                <i onClick={handleClick} id="bar" className={ menu ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
        </nav>
 );
}

export default Navbar;