import React, {useState} from "react";
import MedContainer from "./MedContainer";
import Header from "./Header";

function App() {
  const [search, setSearch] = useState("")

  function handleSearch(newSearch) {
    console.log(newSearch)
  }

  return (
    <div>
      <MedContainer/>
      <Header/>
    </div>
  )
}

export default App;
