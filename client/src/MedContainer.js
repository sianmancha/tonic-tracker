import React from "react";
import NewMedForm from "./NewMedForm";
import MedCard from "./MedCard";
import DisplayMeds from "./DisplayMeds";

function MedContainer() {
    return (
    <div>
        <NewMedForm/>
        <DisplayMeds/>
    </div>
    )
}

export default MedContainer;