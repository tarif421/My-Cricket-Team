import { Suspense, useState } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";

import AvailablePlayers from "./components/Navbar/AvailablePlayers/AvailablePlayers";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/Navbar/SelectedPlayers/SelectedPlayers";

const fetchPlayers = async () => {
  const res = await fetch("players.json");
  return res.json();
};
const playerPromise = fetchPlayers();
function App() {
  const [toggle, setToggle] = useState(true);
  const [availBalance, setAvailBalance] = useState(20000);
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);

  const removePlayer = (p) => {
    const deletePlayer = purchasedPlayers.filter(
      (ply) => ply.playerName !== p.playerName
    );
    setPurchasedPlayers(deletePlayer);
    setAvailBalance(
      availBalance +
        parseInt(
          p.price.split("USD").join("").split(",").join("").split("$").join(" ")
        )
    );
  };

  return (
    <>
      <Navbar availBalance={availBalance}></Navbar>
      <div className=" max-w-[1280px] mx-auto  flex  justify-between items-center">
        <h1 className="font-bold text-2xl">
          {toggle === true
            ? "Available Players"
            : `Selected Players (${purchasedPlayers.length}/6)`}
        </h1>
        <div className="font-semibold">
          <button
            onClick={() => setToggle(true)}
            className={`border-1 border-gray-400 rounded-l-2xl p-3 border-r-0 ${
              toggle === true ? "bg-[#E7FE29]" : ""
            } py-3 px-4`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`border-1 border-gray-400 rounded-r-2xl p-3 border-l-0 ${
              toggle === false ? "bg-[#E7FE29]" : ""
            } py-3 px-4`}
          >
            Selected <span>({purchasedPlayers.length})</span>
          </button>
        </div>
      </div>
      {toggle === true ? (
        <Suspense fallback={<progress className="progress w-56"></progress>}>
          <AvailablePlayers
            setAvailBalance={setAvailBalance}
            playerPromise={playerPromise}
            availBalance={availBalance}
            purchasedPlayers={purchasedPlayers}
            setPurchasedPlayers={setPurchasedPlayers}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers
          purchasedPlayers={purchasedPlayers}
          removePlayer={removePlayer}
        ></SelectedPlayers>
      )}

      <ToastContainer />
    </>
  );
}

export default App;
