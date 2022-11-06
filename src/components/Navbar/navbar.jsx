import { useState } from "react";
import "./navbar.css";
import logo from "../../assects/logo.png"
import Switch from "react-switch";

function Navbar(){

    var [menu, setMenu] = useState(false);

    function handleClick(){
        setMenu(menu = !menu);
    }
    function refresh(){
        window.location.reload(true);
    }

    var [toggle, setToggle] = useState(false)

    function handleToggle(){
        setToggle(!toggle);
    }
    
 return(
        <nav className = "main-nav">
            <div className="logo">
                <h2> <a href="/" onClick={refresh}> <img alt="PK logo" src = {logo} height="30px" width="30px" /></a></h2>
            </div>
            <div className="menu-link">
                <ul id="navbar" className= { menu ? "#navbar active" : "#navbar"}>
                    <li>
                        <a onClick={handleClick} href="#landingPage">Home</a>
                    </li>
                    <li>
                        <a onClick={handleClick}  href="#aboutPage">About</a>
                    </li>
                    <li>
                        <a onClick={handleClick} href="#EduPage">Education</a>
                    </li>
                    <li>
                        <a onClick={handleClick} href="#newSkillsPage">Skills</a>
                    </li>
                    <li>
                        <a onClick={handleClick} href="#ProjectsPage">Projects</a>
                    </li>
                    <li>
                        <a onClick={handleClick} href="#CodeforcesPage">Codeforces</a>
                    </li>
                    <li>
                        <a onClick={handleClick} href="#footerPage">Contact</a>
                    </li>
                    <li>
                        <Switch onChange={handleToggle} checked = {toggle} />
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