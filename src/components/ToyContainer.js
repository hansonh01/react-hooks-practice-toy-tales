import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDonate, onLikes }) {
  return (
    <div id="toy-collection">
      {toys.map((toy)=>(
        <ToyCard
        key={toy.id}
        toy={toy}
        onDonate={onDonate}
        onLikes={onLikes}
        />
      ))}
    </div>
  );
}

export default ToyContainer;
