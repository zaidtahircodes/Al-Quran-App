import { useLocation } from "react-router";
import Navbar from "../Navbar";
import { useState } from "react";
import Verse from "./VerseAccordion";

export default function VersesResults() {

    
    const location = useLocation()
    const versesData = location.state;
    // delete the type before mapping data
    delete versesData.type
    
 // map can only be used on arrays so object.keys returns an array of keys we map over that and use the bracketing method to get the values
 let versesComp =  Object.keys(versesData).map((verse, index)=> {
    return (
       <Verse key={index} {...versesData[verse]} />
    )
  })
    return (
        <div>
            <Navbar />
            <div>
            {versesComp}
            </div>
        </div>
    )
}