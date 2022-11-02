import React from "react"; 
import "./landing.css"
import Typewriter from "typewriter-effect";

function Landing(){ 
    return(
        <>
        <div id="landingPage" className="hero">
            <h1 id = "dialogue">
                Hello there, I'm 
                <br />
                <span className="blue">Prateek Krishna,</span>
                 <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString("A Programmer...")
                        .pauseFor(1200)
                        .deleteAll()
                        .typeString("Web Developer ...")
                        .pauseFor(1200)
                        .deleteAll()
                        .typeString("Second Year CSE Undergrad at")
                        .start();
                    }}
                 />
                 <span className="blue">BIT Mesra</span>
            </h1>
        </div>
        
        </>
    );

}
export default Landing;