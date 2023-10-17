import { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router";
export default function VerseForm() {
    const [formData, setFormData] = useState({
        surah: "",
        verse: "",

    })

    const navigate = useNavigate();

    const option = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
            'X-RapidAPI-Host': 'al-quran1.p.rapidapi.com'
        }
    };
    
    function handleChange(event) {
        const { name, value } = event.target
       
        // OPTIONS TO MOVE AS SEPERATE FILE FOR SECURITY BEFORE DEPLOYING
        setFormData(prevFormdata => {
            return {
                ...prevFormdata,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        fetch(`https://al-quran1.p.rapidapi.com/${formData.surah}/${formData.verse}`, option)
        .then((response) => response.json()).then(data => {
        /* set Type to use as reference on results page */
        let stateData = {...data, type: "verse"}
        navigate(`/results`, {state: stateData})
        })
    }
    return (
        <form onSubmit={handleSubmit}> 
            <div className="mb-6">
        <label for="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Surah number</label>
        <input onChange={handleChange} value={formData.surah} name="surah" type="number" min={1} max={114} placeholder="Choose a chapter id (1-114)"  id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div>
        <label for="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Verse number</label>
        <input name="verse" onChange={handleChange} value={formData.verse} type="number" min={1} max={286} placeholder="Choose a verse number(1-286)" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
    </div>
    <div className="mt-5 flex justify-start"> 
    <button className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Submit</button>
    </div>
    
    </form>

    
    )
    }