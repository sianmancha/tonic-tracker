import React from "react";


function MedCard({ med, onActive, handleDeletedItem}) {
    const {id, active, newMedName, newMedAmnt, newMedUse, newMedDose, newMedFreq} = med

    function handleDeleteClick() {
        fetch(`http://localhost:6001/medications/${id}`, {
            method: "DELETE",
        })
        .then(res => res.json())
        .then(() => handleDeletedItem(id))
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
            <button onClick={() => onActive(med)} className="activeButton">
                {active ? "Activate" : "Deactivate"}
            </button>
            <button className="deleteButton" onClick={handleDeleteClick}>Delete</button>
        </div>
        
    )
}

export default MedCard;

