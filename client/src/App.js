import React, {useState} from "react";
import MedContainer from "./MedContainer";
import Header from "./Header";

function App() {
  const [search, setSearch] = useState("")

  // function handleSearch(newSearch) {
  //   console.log(newSearch)
  //   setSearch(newSearch)
  // }

  return (
    <div>
      <Header />
      <MedContainer search={search}/>
      
    </div>
  )
}

export default App;
// {*/search={search} onSearch={handleSearch}*/}