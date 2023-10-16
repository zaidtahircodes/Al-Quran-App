import { useState } from "react"; 
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
export default function Navbar() {
  // state to keep track of when to open and close the dropdowns
  // default to false because the dropdowns are closed
  const [open, setOpen] = useState(false);
  const [burger, setBurger] = useState(false)

  // INFORMATION BASED ON WHICH LINK WE WANT TO GO TO
    return (
    
<nav id="home" className="bg-white border-gray-200 shadow-sm shadow-gray-300 dark:bg-gray-900 dark:border-gray-700">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <HashLink smooth to="/#home" lassName="flex items-center">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Al-Quran</span>
    </HashLink>
    <button onClick={()=> setBurger(prevBurg=> !prevBurg)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className={`${burger === true ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-dropdown">
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link to="/" className="block py-2 pl-3 pr-4 text-gray-900 rounded md:bg-transparent md:hover:text-yellow-300 md:p-0 md:dark:text-yellow-400 dark:bg-yellow-300 md:dark:bg-transparent">Home</Link>
        </li>
        <li>
            <button onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-300 md:p-0 md:w-auto dark:text-white md:dark:hover:text-yellow-300 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Search <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
  </svg></button>
            <div id="dropdownNavbar" className={`z-10 ${open === true ? 'block absolute' : 'hidden'} font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                <ul onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <Link state={{title: "Search word", subtitle: "This feature allows you to search for a word in the holy quran", Selected: "word", placeholder: "Enter word you want to search"}} to="/search" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Search for word</Link>
                  </li>
                  <li>
                    <Link state={{title: "Search specified verse", subtitle: "This feature allows you to search for a specified verse in the holy quran", Selected: "verse"}}to="/search" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Search for specified verse</Link>
                  </li>
                  <li>
                    <Link state={{title: "Range of verses", subtitle: "blablbalbalblbalbalalbalblabdlbaldbaldbalbdlal", Selected: "verses",}}   to="/search" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Get range of verses</Link>
                  </li>
                </ul>
            </div>
        </li>
        <li>
          <HashLink smooth to="/#information" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-300 md:p-0 dark:text-white md:dark:hover:text-yellow-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Information</HashLink>
        </li>
        <li>
          <Link state={{title: "Search word", subtitle: "This feature allows you to search for a word in the holy quran", Selected: "word", placeholder: "Enter word you want to search"}} smooth to="/search" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-300 md:p-0 dark:text-white md:dark:hover:text-yellow-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Search word</Link>
        </li>
      
      </ul>
    </div>
  </div>
</nav>

    );
}