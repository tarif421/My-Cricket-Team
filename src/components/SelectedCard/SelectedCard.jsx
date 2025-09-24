import React from "react";

const SelectedCard = ({ player, removePlayer }) => {
  const handleRemove = () => {
    removePlayer(player);
  };
  return (
    <div className="border-2 border-gray-100 flex justify-between items-center p-3 rounded-xl px-15 mt-5">
      <div className="flex items-center">
        <img
          className="h-[60px] w-[80px] rounded-xl "
          src={player.playerImg}
          alt=""
        />
        <div className="ml-2">
          <h1 className="font-bold">{player.playerName}</h1>
          <p className="text-xs">{player.playingRole}</p>
        </div>
      </div>
      <div>
        <button
          onClick={handleRemove}
          className="text-red-700 font-bold border-1 border-red-400 p-2"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default SelectedCard;
