import React from "react";
import "./Hero.css";
import Heroimage from "../../assects/Hero Image.png";
function Hero () {
    return (
        <div className="heroSection">
           <img src={Heroimage} alt = "Hero Image" className="hero" /> 
        </div>
    )
}

export default Hero;