import React from "react";

function MedCard({med: {newMedName, newMedAmnt, newMedUse, newMedDose, newMedFreq}}) {
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
        </div>
    )
}

export default MedCard;