import { useLocation } from "react-router";
import Navbar from "../Navbar";
import { useState } from "react";
export default function verseResults() {
    // api data being passed to display
    const location = useLocation();
    const verseData = location.state;

    // state to keep track of accordion open and close
    const [accordionOpen, setAccordionOpen] = useState(false);
   
return (
    <div>
       <Navbar />
       <div className="mt-4 bg-yellow-300 mx-3">
  <h2>
    <button onClick={() => setAccordionOpen(prevOpen => !prevOpen)} type="button" className="flex items-center justify-center w-full py-5 text-left text-gray-900 font-bold text-lg border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
      <span>Ayat no. {verseData.id}</span>
      
    </button>
  </h2>
  <div className={`${accordionOpen ? "block" : "hidden"} overflow-hidden}`}>
    <div class="py-5 border-b border-yellow-600 dark:border-gray-700">
      <p className=" text-gray-900 text-right mr-2 ">{verseData.content}</p>
      <p className="text-gray-900 mb-2 ml-2">{verseData.transliteration}</p>
     
    
      <p className="text-gray-900 text-lg border-t pt-7 border-gray-950 text-center dark:text-gray-400">"{verseData.translation_eng}"</p>
    </div>
  </div>
    </div>
</div>
)
}