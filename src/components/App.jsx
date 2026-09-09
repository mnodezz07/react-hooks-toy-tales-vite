import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((response) => response.json())
      .then((data) => setToys(data));
  }, []);

  function updateToy(updatedToy) {
    setToys((currentToys) =>
      currentToys.map((toy) =>
        toy.id === updatedToy.id ? updatedToy : toy
      )
    );
  }

  function addToy(newToy) {
    setToys((currentToys) => [...currentToys, newToy]);
  }

  function deleteToy(id) {
    setToys((currentToys) =>
      currentToys.filter((toy) => toy.id !== id)
    );
  }


  function updateToy(updatedToy) {
    setToys((currentToys) =>
      currentToys.map((toy) =>
        toy.id === updatedToy.id ? updatedToy : toy
      )
    );
  }

  return (
    <>
      <Header />

      {showForm ? <ToyForm addToy={addToy} /> : null}

      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>

      <ToyContainer toys={toys} />
    </>
  );
}

export default App;