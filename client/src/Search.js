import React, {useState} from "react";
import MedCard from "./MedCard";

function Search({searchTerm, onSearchChange}) {
    

    
    

   
    

    return (
        <form className="searchbar" >
            <input type="text" id="search" placeholder="Search Your Medicines By Name" value={searchTerm} onChange={(e) => onSearchChange(e.target.value)}></input>
            <button className="searchButton" type="submit">Search</button>
        </form>
    )
}

export default Search;