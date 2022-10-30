import React from "react";
import "./projects.css"
import flutter from "./flutter.png"
import prateek from "./prateek.png"
import handpose from "./hand_crops.png"

function Projects(){
    return(
        <div className="projects">
            <h1>Projects</h1>
            <hr className="hrule-proj"/>
            <div className="project-space">
                <div className="proj-card">
                    <div className="proj-img">
                        <img className="proj-pics" alt="flutter" src={flutter}></img>
                        <p className="proj-description">My Notes App Made With Flutter (under progresss)</p>
                        <button onClick={(e)=>{e.preventDefault(); window.location.href = "https://github.com/PrateekKrishna/my-notes-flutter"}} className="proj-btn">GitHub</button>
                    </div>
                </div>
                <div className="proj-card">
                    <div className="proj-img">
                        <img className="proj-pics" alt="portfolio" src={prateek}></img>
                        <p className="proj-description">Portfolio Website Made With React</p>
                        <button onClick={(e)=>{e.preventDefault(); window.location.href = "https://github.com/PrateekKrishna/prateek-portfolio"}} className="proj-btn">GitHub</button>
                    </div>
                </div>
                <div className="proj-card">
                    <div className="proj-img">
                        <img className="proj-pics" alt="handpose" src={handpose}></img>
                        <p className="proj-description">Handpose Detection Model using OpenCV & Mediapipe</p>
                        <button onClick={(e)=>{e.preventDefault(); window.location.href = "https://github.com/PrateekKrishna/Handpose-Detection"}} className="proj-btn">GitHub</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;