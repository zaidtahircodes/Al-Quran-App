
import { useLocation } from "react-router";
import Navbar from "../Navbar";
import Verse from "./VerseAccordion";
export default function WordSearch() {
const location = useLocation()
const verseData = location.state
// remove first and last key as they are total matches and types respectively 
delete verseData.type
// save matches for use in heading before deleting
let matches = verseData[0]["total_matches "]
delete verseData[0]

let wordComp = Object.keys(verseData).map((verse, index)=> {
    console.log(verseData[verse])
return (
<Verse {...verseData[verse]} key={index} />
)
})
return (
    <div>
    <Navbar />
    
    <h1 class="text-5xl font-normal mt-4 dark:text-white text-center">Matches:<span className="font-extrabold"> {matches}</span></h1>
    {wordComp}
    </div>
)


}