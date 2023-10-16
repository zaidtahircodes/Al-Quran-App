import { HashLink } from "react-router-hash-link"
import { Link } from "react-router-dom"
export default function Hero(){
    return (
        
<section className="bg-center bg-no-repeat bg-[url('../src/assets/Quran.jpg')] bg-gray-700 bg-blend-multiply">
    <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Discover the Quran's Wisdom: Explore, Search</h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Unlock the Quran's treasures through our user-friendly platform. Easily search for specific words, verses, and chapters, and deepen your connection with its timeless teachings.</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link state={{title: "Search word", subtitle: "This feature allows you to search for a word in the holy quran", Selected: "word", placeholder: "Enter word you want to search"}} className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-200 dark:focus:ring-blue-900" to="/search">
                Try it now!
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>
            <HashLink smooth to="#information" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Learn more
            </HashLink>  
        </div>
    </div>
</section>

    )
}