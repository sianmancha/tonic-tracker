import React, {useState} from "react";


function MedCard({ med, onActive, handleDeletedItem}) {
    const {id, newMedName, newMedAmnt, newMedUse, newMedDose, newMedFreq} = med
    const [toTake, setToTake] = useState(true)
    const [active, setActive] = useState(true)

    function handleDeleteClick() {
        fetch(`http://localhost:6001/medications/${id}`, {
            method: "DELETE",
        })
        .then(res => res.json())
        .then(() => handleDeletedItem(id))
    }

    function toggleTaken() {
        setToTake((toTake) => !toTake)
    }

    function toggleActive() {
        setActive((active) => !active)
    }

    return (
        
        <div className="meds">
            <div className="detail">
                <h4>Medicine Name</h4>
                {newMedName}
            </div>
            <div className="detail">
                <h4>Amount of Medicine</h4>
                {newMedAmnt}
            </div>
            <div className="detail">
                <h4>Medicine Use</h4>
                {newMedUse}
            </div>
            <div className="detail">
                <h4>Dosage</h4>
                {newMedDose}
            </div>
            <div className="detail">
                <h4>Frequency</h4>
                {newMedFreq}
            </div>
            {active? (
            <button onClick={toggleActive} className="activeButton">Activate</button>
            ) : (
            <button onClick={toggleActive} className="activeButton">Deactivate</button>
            )}
            {toTake? (
            <button onClick={toggleTaken} className="takenButton">I have taken it.</button>
            ) : (
            <button onClick={toggleTaken} className="takenButton">I haven't taken it.</button>
            )}
            <button className="deleteButton" onClick={handleDeleteClick}>Delete</button>
        </div>
        
    )
}

export default MedCard;

