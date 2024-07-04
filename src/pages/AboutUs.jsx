import React from "react";
import AnimatedWave from "../components/AnimatedWave";
// import AnimatedWave from "../components/AnimatedWaveImproved";
// import { AboutUsContents } from "./AboutUsContents";
import { AboutUsContents } from "./AboutUsContent";


function Aboutus() {
  return (
    <>
    
    <div style={{overflowX:"hidden"}}>
      <AnimatedWave title={"About Mann Ko Bhawana"}/>
    </div>

    <AboutUsContents/>
    </>
  );
}

export default Aboutus;
