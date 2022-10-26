import React from "react";
import "./skills.css";

function Skills() {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <hr className="hrule-skills"/>
      <div className="all-six">
        <div className="first-three">
            <div className="skill-one">
                <p className="skillname">C++</p>
                <div style={{width: "90%", backgroundColor: "#0bceaf"}} className="progress-bar">
                        <p className="skill-level">90%</p>
                </div>
                
            </div>
            <div className="skill-two">
            <p className="skillname">Dart</p>
                <div style={{width: "80%", backgroundColor: "#ffc107"}} className="progress-bar">
                <p className="skill-level">80%</p>
                </div>
            </div>
            <div className="skill-three">
            <p className="skillname">HTML</p>
                <div style={{width: "95%", backgroundColor: "#dc3545"}} className="progress-bar">
                <p className="skill-level">95%</p>
                </div>
            </div>
        </div>
        <div className="second-three">
        <div className="skill-one">
                <p className="skillname">CSS</p>
                <div style={{width: "90%", backgroundColor: "grey"}} className="progress-bar">
                <p className="skill-level">90%</p>
                </div>
                
            </div>
            <div className="skill-two">
            <p className="skillname">JavaScript</p>
                <div style={{width: "80%", backgroundColor: "#17a2b8"}} className="progress-bar">
                <p className="skill-level">80%</p>
                </div>
            </div>
            <div className="skill-three">
            <p className="skillname">React</p>
                <div style={{width: "85%", backgroundColor: "#ffc107"}} className="progress-bar">
                <p className="skill-level">85%</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
