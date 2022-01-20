import React from "react";
import MedCard from "./MedCard";

function ActiveMed({medicines, deactivateMed}) {
    const filteredMeds = medicines.filter(({actDeact}) => actDeact)
    
    return (
        <div>
            <h1>ActiveMed</h1>
            {
                // filteredMeds.map(med => <MedCard key={med.id} med={med} onActDeact={deactivateMed}/>)
            }
        </div>
    )
}

export default ActiveMed;