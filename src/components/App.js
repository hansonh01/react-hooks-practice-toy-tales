import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3001/toys')
      .then(r=>r.json())
      .then(data=>setToys(data))
  },[])

  function handleClick() {
    setShowForm((show) => !show);
  }

  const handleAddToy = (newToy) => {
    setToys([...toys, newToy])
  };

  const handleDeleteToy = (id) => {
    fetch(`http://localhost:3001/toys/${id}`,{
      method:'DELETE'
    })
      .then(r=>r.json())
      .then(()=>{
        const updatedToys = toys.filter((toy)=>{
          return toy.id !== id
        })
        setToys(updatedToys);
      })
  };

  const handleUpdateLikes = (updatedLikes) => {
    const updatedToys = toys.map((toy)=>{
      return toy.id === updatedLikes.id ? updatedLikes : toy
    })
    setToys(updatedToys);
  };

  return (
    <>
      <Header />
      {showForm ? <ToyForm onToySubmit={handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
      toys={toys}
      onDonate={handleDeleteToy}
      onLikes={handleUpdateLikes}
      />
    </>
  );
}

export default App;
