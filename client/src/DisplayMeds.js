import React, {useState, useEffect} from "react";
import NewMedForm from "./NewMedForm";
import MedCard from "./MedCard";

    function DisplayMeds() {
        const [meds, setMeds] = useState([])

        useEffect(() => {
            fetch("http://localhost:6001/medications")
            .then(res => res.json())
            .then(data => setMeds(data))
        }, [])

        function handleAddMeds(newMed) {
            setMeds([...meds, newMed])
        }

        function handleDeletedItem(id) {
            const updatedMeds = meds.filter((med) => med.id !== id)
            setMeds(updatedMeds)
        }

         const displayMeds = meds.map(med => <MedCard key={med.id} med={med} handleDeletedItem={handleDeletedItem}/>)

        return (
            <div>
                <NewMedForm handleAddMeds={handleAddMeds}/>
                {displayMeds}
            </div>
            )
    }

export default DisplayMeds