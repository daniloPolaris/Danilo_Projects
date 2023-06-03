import { useEffect, useState } from "react";
import CodePegBoard from "./components/CodePegBoard";
import KeyPegBoard from "./components/KeyPegBoard";
import NewGameButton from "./components/NewGameButton";
import SuitButtonsRow from "./components/SuitButtonsRow";
import Button from "./components/button";

import ClubSuit from "./components/ClubSuit";
import StarSuit from "./components/StarSuit";
import SpadeSuit from "./components/SpadeSuit";
import HeartSuit from "./components/HeartSuit";
import DiamondSuit from "./components/DiamondSuit";
import SkockoSuit from "./components/SkockoSuit";

function App() {
  const [secretCode, setSecretCode] = useState([]);
  const [isSecretCodeVisible, setIsSecretCodeVisible] = useState(false);

  function revealSecretCode() {
    // dodaj uslov kada je gotova igra da je true i u codePegRow-u stavis uslov da se renderuje ako je true
    setIsSecretCodeVisible(true);
  }

  useEffect(() => {
    generateSecretCode();
  }, []);

  function generateSecretCode() {
    const secretCodeElements = [
      <ClubSuit />,
      <StarSuit />,
      <SpadeSuit />,
      <HeartSuit />,
      <DiamondSuit />,
      <SkockoSuit />,
    ];
    const code = [];
    while (code.length < 4) {
      const randomIndex = Math.floor(Math.random() * secretCodeElements.length);
      const randomElement = secretCodeElements[randomIndex];
      if (!code.includes(randomElement)) {
        code.push(randomElement);
      }
    }
    setSecretCode(code);
  }

  const [selectedSuits, setSelectedSuits] = useState([]);

  function pushSuit(selectedSuit) {
    setSelectedSuits((prevSelectedSuits) => {
      if (prevSelectedSuits.length < 4) {
        return [...prevSelectedSuits, selectedSuit];
      }
      return prevSelectedSuits;
    });
  }

  function undoSuit() {
    setSelectedSuits((prevSelectedSuits) => {
      if (prevSelectedSuits.length > 0) {
        const updatedSelectedSuits = [...prevSelectedSuits];
        updatedSelectedSuits.pop();
        return updatedSelectedSuits;
      }
      return prevSelectedSuits;
    });
  }

  return (
    <>
      <h1 className="text-2xl font-medium font-serif tracking-widest text-slate-200 mb-3">SKOČKO QUIZ GAME</h1>
      <NewGameButton generateSecretCode={generateSecretCode} />
      <div className="flex mb-5">
        <CodePegBoard selectedSuits={selectedSuits} secretCode={secretCode} isSecretCodeVisible={isSecretCodeVisible} />
        <KeyPegBoard />
      </div>
      <SuitButtonsRow pushSuit={pushSuit} />
      <Button text={"CHECK RESULT"} />
      <Button text={"UNDO SYMBOL"} undoSuit={undoSuit} />
    </>
  );
}

export default App;
