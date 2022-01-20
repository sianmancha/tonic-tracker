import React, {useState, useEffect} from "react";
import MedCard from "./MedCard";
import DisplayMeds from "./DisplayMeds";

function MedContainer({search}) {
    const [meds, setMeds] = useState([])
    console.log(meds)

    useEffect(() => {
        fetch("http://localhost:6001/medications")
        .then(resp => resp.json())
        .then((meds) => {
            setMeds(meds)
        })
    }, [])

    const filteredMeds = meds.filter((med) => {
        return med.name
    })

        

         
            
          

    return (
    <div>
        <DisplayMeds/>
        {
        filteredMeds.map(med => <MedCard key={med.id} med={med}/>)
        }
    </div>
    )
}

export default MedContainer;