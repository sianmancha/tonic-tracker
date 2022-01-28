import React, {useState} from "react";
import MedCard from "./MedCard";

function Search() {
    const [currentSearch, setCurrentSearch] = useState("")

   
    

    return (
        <form className="searchbar" >
            <input type="text" id="search" placeholder="Search Your Medicines By Name" value={currentSearch} onChange={(e) => setCurrentSearch(e.target.value)}></input>
            <button className="searchButton" type="submit">Search</button>
        </form>
    )
}

export default Search;