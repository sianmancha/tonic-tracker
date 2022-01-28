import React, {useState, useEffect} from "react";
import MedCard from "./MedCard";
import DisplayMeds from "./DisplayMeds";

function MedContainer() {
    const [meds, setMeds] = useState([])
    console.log(meds)

    useEffect(() => {
        fetch("http://localhost:6001/medications")
        .then(resp => resp.json())
        .then((meds) => {
            setMeds(meds)
        })
    }, [])

    const filteredMeds = meds.filter(med => {
        return med
    })

        function toggleActive(medToAdd) {
            setMeds((meds) => {
                const medIndex = meds.findIndex(
                    (med) => 
                        med.id === medToAdd.id
                );
                return [
                    ...meds.slice(0, medIndex),
                    {
                        ...medToAdd,
                        active: !medToAdd.active,
                    },
                    ...meds.slice(medIndex + 1)
                ]
            })
        }

    return (
    <div>
        <DisplayMeds/>
        {
        filteredMeds.map(med => <MedCard key={med.id} med={med} onActive={toggleActive}/>)
        }
    </div>
    )
}

export default MedContainer;