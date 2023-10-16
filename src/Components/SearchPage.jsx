import { useLocation } from "react-router"
import { useState } from "react";
import VerseForm from "./Forms/verseForm";
import InputSearch from "./Forms/inputSearch";
import VersesForm from "./Forms/versesForm";
// better and more logical way to do this would be with subroutes 
export default function SearchPage() {

    // get state data from our links
    const location = useLocation();
    const data = location.state
    // select type based on which button clicked
    const form_select = data.Selected

    return (
        /*default section  */
        <section className="bg-center h-screen bg-no-repeat bg-[url('../src/assets/Quran.jpg')] bg-gray-700 bg-blend-multiply">
              <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">{data.title}</h1>
              <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">{data.subtitle}</p>  

{/* specific form input for words and surah */}
{form_select === "word" &&
<InputSearch input_type={form_select} input_placeholder={data.placeholder} />
}
{/*specific form input type for verse and verses */}
{form_select === "verse" &&
<VerseForm /> 
 }
 
 {form_select === "verses" &&
<VersesForm />

 }



        </div>
        </section>
    )
}