import React from "react"; 
import "./landing.css"
import Typewriter from "typewriter-effect";

function Landing(){
    var txt = [ "A Programmer...", "Full stack Developer..."]
    return(
        <>
        <div className="hero">
            <h1 id = "dialogue">
                Hello There I'm 
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
                        .typeString("second year CSE undergrad at")
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