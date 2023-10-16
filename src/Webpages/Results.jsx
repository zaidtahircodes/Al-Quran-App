import React from 'react'
import VerseResults from "../Components/Results/verseResults";
import VersesResults from '../Components/Results/VersesResults';
import WordSearch from '../Components/Results/wordSearch';
import { useLocation } from 'react-router';
export default function Results() {
    const location = useLocation()
    const verseData = location.state;
  
    return (

        /* add conditional rendering based on what page we're coming from */
       <div> 
        {verseData.type === "verse" && <VerseResults />}
        {verseData.type === "verses" && <VersesResults />}
        {verseData.type === "word" && <WordSearch />}
      </div>
    )
}