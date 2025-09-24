import React, { use } from "react";

import PlayerCard from "../../playerCards/PlayerCard";

const AvailablePlayers = ({
  playerPromise,
  setAvailBalance,
  availBalance,
  purchasedPlayers,
  setPurchasedPlayers,
}) => {
  const playerData = use(playerPromise);

  return (
    <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-20 ">
      {playerData.map((player) => (
        <PlayerCard
          setAvailBalance={setAvailBalance}
          player={player}
          availBalance={availBalance}
          setPurchasedPlayers={setPurchasedPlayers}
          purchasedPlayers={purchasedPlayers}
        ></PlayerCard>
      ))}
    </div>
  );
};

export default AvailablePlayers;
