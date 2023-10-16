import Navbar from "../Components/Navbar";
import SearchPage from "../Components/SearchPage";
import { useLocation } from "react-router";
export default function Search() {
const location = useLocation()
console.log(location)
return (
    <>
    <Navbar />
    <SearchPage />
    </>
)
}