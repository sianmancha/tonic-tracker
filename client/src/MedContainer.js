import React, {useState, useEffect} from "react";
import MedCard from "./MedCard";
import DisplayMeds from "./DisplayMeds";
import Search from "./Search";

function MedContainer({}) {
    const [meds, setMeds] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    console.log(meds)

    useEffect(() => {
        fetch("http://localhost:6001/medications")
        .then(resp => resp.json())
        .then((meds) => {
            setMeds(meds)
        })
    }, [])

    const filteredMeds = meds.filter((med) => {
        console.log(med)
        return med.newMedName.includes(searchTerm)
    })

    
    
    return (
    <div>
        <Search searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
        <DisplayMeds filteredMeds={filteredMeds} />
        
    </div>
    )
}

export default MedContainer;