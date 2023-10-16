import { useEffect, useState } from "react";
import InfoCard from "./infoCard";


export default function Info() {
    // data we get back from api stored in local state
    const [apiData, setApiData] = useState({});
    // fixing small problem in api data
    // parameters to make api call
    const url = 'https://al-quran1.p.rapidapi.com/';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '68df651bfcmsh44a58e8eff84e87p1ec52fjsnf4f9a84c4fbb',
            'X-RapidAPI-Host': 'al-quran1.p.rapidapi.com'
        }
    };

// make api call  
useEffect(() => {
    fetch(url, options).then(
        (response) => response.json())
        .then((data) => setApiData(data));
  
  
}, [])

let dataKeys = Object.keys(apiData)
// map through the keys and render infoCard for each of them
let InfoCards = dataKeys.map((item) => {
// make a copy of state before passing them down as prop because of a minor error in api data to fix the error
let copyData = {...apiData}
copyData.total_surahs = 114;
    return (
        <InfoCard 
        title={item.split('_').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ')}
        item={copyData[item]} />
       
    )
})

return (
<>
<div className=" mt-3 text-center">
<h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-center text-gray-900 md:text-4xl dark:text-white">The Holy Quran</h2>
</div>
<dl id="information" className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
{InfoCards}
</dl>
</>

)

}