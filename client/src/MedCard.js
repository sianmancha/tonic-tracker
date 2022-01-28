import React from "react";

function MedCard({med: {id, newMedName, newMedAmnt, newMedUse, newMedDose, newMedFreq}, handleDeletedItem}) {

    function handleDeleteClick() {
        fetch(`http://localhost:6001/medications/${id}`, {
            method: "DELETE",
        })
        .then(res => res.json())
        .then(() => handleDeletedItem(id))
    }

    return (
        <div className="meds">
            <div className="name">
                {newMedName}
            </div>
            <div className="amnt">
                {newMedAmnt}
            </div>
            <div className="use">
                {newMedUse}
            </div>
            <div className="dose">
                {newMedDose}
            </div>
            <div className="freq">
                {newMedFreq}
            </div>
            <button className="deleteButton" onClick={handleDeleteClick}>Delete</button>
        </div>
    )
}

export default MedCard;