import React from "react";

function ToyCard({ toy, onDonate, onLikes }) {
  const { id, name, image, likes } = toy;

  const handleDeleteToy = () => {
    onDonate(id);
  };

  const handleUpdateLikes = () => {
    const updateLikes = {likes: toy.likes + 1}
    fetch(`http://localhost:3001/toys/${id}`,{
      method:'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(updateLikes)
    })
      .then(r=>r.json())
      .then(onLikes)
  };

  
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button 
      className="like-btn"
      onClick={handleUpdateLikes}
      >Like {"<3"}</button>
      <button 
      className="del-btn"
      onClick={handleDeleteToy}
      >Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
