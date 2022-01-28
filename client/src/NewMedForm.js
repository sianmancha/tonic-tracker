import React, {useState} from 'react'

function NewMedForm({handleAddMeds}) {
    const [newMedName, setNewMedName] = useState("")
    const [newMedAmnt, setNewMedAmnt] = useState("")
    const [newMedUse, setNewMedUse] = useState("")
    const [newMedDose, setNewMedDose] = useState("")
    const [newMedFreq, setNewMedFreq] = useState("")
    

    function handleSubmit(e) {
        e.preventDefault()
        const medData = {
            newMedName: newMedName,
            newMedAmnt: newMedAmnt,
            newMedUse: newMedUse,
            newMedDose: newMedDose,
            newMedFreq: newMedFreq,
        }
    
    fetch("http://localhost:6001/medications", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(medData),
    })
    .then(res => res.json())
    .then(newMed => handleAddMeds(newMed))

    setNewMedName("")
    setNewMedAmnt("")
    setNewMedUse("")
    setNewMedDose("")
    setNewMedFreq("")
    }


    return (
        <div>
            
            <form className="medForm" onSubmit={(e) => handleSubmit(e)}>
            <h3 className="medFormHeader"> Add A New Medication Here</h3>
                <label>
                    Medication Name:
                    <input type="text" placeholder="" value={newMedName} onChange={(e) => setNewMedName(e.target.value)}></input>
                </label>
                <label>
                    How much of this medication do you have?
                    <input type="text" placeholder="" value={newMedAmnt} onChange={(e) => setNewMedAmnt(e.target.value)}></input>
                </label>
                <label>
                    What does it treat?
                <input type="text" placeholder="" value={newMedUse} onChange={(e) => setNewMedUse(e.target.value)}></input>
                </label>
                <label>
                    What is the dosage?
                <input type="text" placeholder="" value={newMedDose} onChange={(e) => setNewMedDose(e.target.value)}></input>
                </label>
                <label>
                    How often do you take it?
                <input type="text" placeholder="" value={newMedFreq} onChange={(e) => setNewMedFreq(e.target.value)}></input>
                </label>
                <div className="submit">
                <input className="medSubmit" type="submit"></input>
                </div>
            </form>
        </div>
    )

}

export default NewMedForm;