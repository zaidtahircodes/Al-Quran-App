import { HashLink } from "react-router-hash-link"
export default function Footer() {
    return (

        
<footer className="bg-white shadow-slate-200 shadow-inner rounded-lg dark:bg-gray-900 m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
                <HashLink smooth to="/#home" className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</HashLink>
    
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <HashLink smooth to="/#information" href="#" className="mr-4 hover:underline md:mr-6 ">Information</HashLink>
                </li>
                <li>
                    <a href="https://rapidapi.com/raz0229/api/al-quran1" className="mr-4 hover:underline md:mr-6 ">API used</a>
                </li>
                <li>
                    <a href="https://github.com/zaidtahircodes" className="mr-4 hover:underline md:mr-6">Github</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/zaid-tahir/" className="hover:underline">LinkedIn</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">Developed by<a href="https://linktr.ee/zaidtahir" class="hover:underline"> Zaid Tahir</a></span>
    </div>
</footer>


    )
}