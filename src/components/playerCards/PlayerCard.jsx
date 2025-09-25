import React, { useState } from "react";
import UerImg from "../../assets/User1.png";
import UserFlag from "../../assets/Vector1.png";
import SelectedPlayers from "../Navbar/SelectedPlayers/SelectedPlayers";
import { toast } from "react-toastify";

const PlayerCard = ({
  player,
  setAvailBalance,
  availBalance,
  purchasedPlayers,
  setPurchasedPlayers,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelected = (playerData) => {
    const playerPrice = parseInt(
      playerData.price
        .split("USD")
        .join("")
        .split(",")
        .join("")
        .split("$")
        .join(" ")
    );

    if (availBalance < playerPrice) {
      console.log("tarif");
      toast("You don't have sufficient coin");
      return;
    }
    if (purchasedPlayers.length === 6) {
      console.log("hasan");
      toast("6 players added");
      return;
    }

    setIsSelected(true);
    setAvailBalance(availBalance - playerPrice);

    setPurchasedPlayers([...purchasedPlayers, playerData]);
    toast("player purchased");
  };

  return (
    <div class="card bg-base-100 shadow-sm p-4 r rounded-2xl">
      <figure>
        <img
          className=" h-40 w-full  md:h-70 md:w-full object-cover rounded-t-2xl "
          src={player.playerImg}
          alt="Shoes"
        />
      </figure>
      <div class="   mt-4">
        <div className="flex ">
          <img className="flex " src={UerImg} alt="" />
          <h2 class="card-title ml-2 md:text-[20px] text-[12px]">
            {player.playerName}
          </h2>
        </div>
        <div className="flex justify-between mt-2 md:mt-4 border-b-1 border-gray-200 pb-2 ">
          <div className="flex opacity-80 items-center ">
            <img
              className="md:block hidden w-4 h-4 md:w-7 md:h-8"
              src={UserFlag}
              alt=""
            />
            <span className="ml-2  text-[12px] md:text-xl">
              {player.playerCountry}
            </span>
          </div>
          <button className="btn text-[8px] md:text-[15px] md:p-[8px] p-2 ">
            {player.playingRole}
          </button>
        </div>
        <div className="flex justify-between  md:text-xl md:font-bold opacity-90">
          <span>Rating</span>
          <span>{player.rating}</span>
        </div>

        <div className="flex   justify-between md:text-[15px] text-[9px]  gap-2     md:font-bold  mt-4">
          <span>{player.battingStyle}</span>
          <span className="opacity-60">{player.bowlingStyle}</span>
        </div>

        <div class="card-actions justify-between items-center md:mt-4 mt-2 ">
          <p className=" md:text-xl md:font-bold text-[12px] font-bold mt-2 ">
            Price: {player.price}{" "}
          </p>
          <button
            disabled={isSelected}
            onClick={() => {
              handleSelected(player);
            }}
            class="btn mt-2 md:mt-4 md:text-[15px]  text-[10px] "
          >
            {isSelected === true ? "selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
