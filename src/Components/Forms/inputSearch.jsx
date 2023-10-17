import { useState } from "react"
import { useNavigate } from "react-router";
export default function InputSearch(props) {
    const [FormData, setFormData] = useState({
        form: "",
    })
    const Navigate = useNavigate()

    // OPTIONS TO MOVE AS SEPERATE FILE FOR SECURITY BEFORE DEPLOYING
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
            'X-RapidAPI-Host': 'al-quran1.p.rapidapi.com'
        }
    };
    function handleChange(event) {
        const { name, value } = event.target
        setFormData(prevFormdata => {
            return {
                ...prevFormdata,
                [name]: value
            }
        })

    }
    function handleSubmit(event){
        event.preventDefault() 
            fetch(`https://al-quran1.p.rapidapi.com/corpus/${FormData.form}`, options)
            .then((response) => response.json()).then(data => {
                let stateData = {...data, type: "word"}
                Navigate("/results", {state: stateData})
            })
        
    } 
    return (
    <form onSubmit={handleSubmit}>   
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input name="form" onChange={handleChange} value={FormData.form} type="search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={props.input_placeholder} required />
        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-200 font-medium rounded-lg text-sm px-4 py-2">Search</button>
    </div>
</form>
    )
}