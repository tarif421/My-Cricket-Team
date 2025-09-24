import React from "react";
import SelectedCard from "../../SelectedCard/SelectedCard";

const SelectedPlayers = ({ purchasedPlayers, removePlayer }) => {
  return (
    <div className="max-w-[1280px] mx-auto">
      {purchasedPlayers.map((player) => (
        <SelectedCard
          player={player}
          removePlayer={removePlayer}
        ></SelectedCard>
      ))}
    </div>
  );
};

export default SelectedPlayers;
