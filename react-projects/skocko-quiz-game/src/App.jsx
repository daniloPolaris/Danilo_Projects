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

import RedDot from "./components/RedDot";
import YellowDot from "./components/YellowDot";

function App() {
  useEffect(() => {
    generateSecretCode();
  }, []);

  const [secretCode, setSecretCode] = useState([]);

  function generateSecretCode() {
    const secretCodeElements = [
      <ClubSuit value={"ClubSuit"} />,
      <StarSuit value={"StarSuit"} />,
      <SpadeSuit value={"SpadeSuit"} />,
      <HeartSuit value={"HeartSuit"} />,
      <DiamondSuit value={"DiamondSuit"} />,
      <SkockoSuit value={"SkockoSuit"} />,
    ];
    const code = [];
    while (code.length < 4) {
      const randomIndex = Math.floor(Math.random() * secretCodeElements.length);
      const randomElement = secretCodeElements[randomIndex];
      code.push(randomElement);
    }
    setSecretCode(code);
  }
  
  function resetGame() {
    setSelectedSuits([]);
    setSelectedSuits1([]);
    setSelectedSuits2([]);
    setSelectedSuits3([]);
    setSelectedSuits4([]);
    setSelectedSuits5([]);

    setDots([]);
    setDots1([]);
    setDots2([]);
    setDots3([]);
    setDots4([]);
    setDots5([]);

    setRow(0);
    setRedDots(0);

    generateSecretCode();
  }

  const [row, setRow] = useState(0);
  const [redDots, setRedDots] = useState(0);

  const [selectedSuits, setSelectedSuits] = useState([]);
  const [selectedSuits1, setSelectedSuits1] = useState([]);
  const [selectedSuits2, setSelectedSuits2] = useState([]);
  const [selectedSuits3, setSelectedSuits3] = useState([]);
  const [selectedSuits4, setSelectedSuits4] = useState([]);
  const [selectedSuits5, setSelectedSuits5] = useState([]);

  function pushSuit(selectedSuit) {
    if (redDots !== 4) {
      const pushToSelectedSuits = (prevSelectedSuits) => {
        if (prevSelectedSuits.length < 4) {
          return [...prevSelectedSuits, selectedSuit];
        }
        return prevSelectedSuits;
      };

      if (row === 0) {
        setSelectedSuits((prevSelectedSuits) => pushToSelectedSuits(prevSelectedSuits));
      } else if (row === 1) {
        setSelectedSuits1((prevSelectedSuits1) => pushToSelectedSuits(prevSelectedSuits1));
      } else if (row === 2) {
        setSelectedSuits2((prevSelectedSuits2) => pushToSelectedSuits(prevSelectedSuits2));
      } else if (row === 3) {
        setSelectedSuits3((prevSelectedSuits3) => pushToSelectedSuits(prevSelectedSuits3));
      } else if (row === 4) {
        setSelectedSuits4((prevSelectedSuits4) => pushToSelectedSuits(prevSelectedSuits4));
      } else if (row === 5) {
        setSelectedSuits5((prevSelectedSuits5) => pushToSelectedSuits(prevSelectedSuits5));
      }
    }
  }

  function undoSuit() {
    const undoSelectedSuit = (setter, prevSelectedSuits) => {
      if (prevSelectedSuits.length > 0) {
        const updatedSelectedSuits = [...prevSelectedSuits];
        updatedSelectedSuits.pop();
        return updatedSelectedSuits;
      }
      return prevSelectedSuits;
    };

    if (row === 0) {
      setSelectedSuits((prevSelectedSuits) => undoSelectedSuit(setSelectedSuits, prevSelectedSuits));
    } else if (row === 1) {
      setSelectedSuits1((prevSelectedSuits1) => undoSelectedSuit(setSelectedSuits1, prevSelectedSuits1));
    } else if (row === 2) {
      setSelectedSuits2((prevSelectedSuits2) => undoSelectedSuit(setSelectedSuits2, prevSelectedSuits2));
    } else if (row === 3) {
      setSelectedSuits3((prevSelectedSuits3) => undoSelectedSuit(setSelectedSuits3, prevSelectedSuits3));
    } else if (row === 4) {
      setSelectedSuits4((prevSelectedSuits4) => undoSelectedSuit(setSelectedSuits4, prevSelectedSuits4));
    } else if (row === 5) {
      setSelectedSuits5((prevSelectedSuits5) => undoSelectedSuit(setSelectedSuits5, prevSelectedSuits5));
    }
  }

  const [dots, setDots] = useState([]);
  const [dots1, setDots1] = useState([]);
  const [dots2, setDots2] = useState([]);
  const [dots3, setDots3] = useState([]);
  const [dots4, setDots4] = useState([]);
  const [dots5, setDots5] = useState([]);

  const checkResult = () => {
    if (row >= 6) {
      return;
    }

    const selectedSuitsArray = [
      selectedSuits,
      selectedSuits1,
      selectedSuits2,
      selectedSuits3,
      selectedSuits4,
      selectedSuits5,
    ];
    const dotsArray = [];

    if (selectedSuitsArray[row].length !== 4) {
      alert("Please select 4 suits.");
      return;
    }

    let exactMatches = 0;
    let suitMatches = 0;
    const guessArray = selectedSuitsArray[row].map((item) => item.props.value);
    const answerArray = secretCode.map((item) => item.props.value);

    for (let i = 0; i < 4; i++) {
      if (guessArray[i] === answerArray[i]) {
        exactMatches++;
      }
    }

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (guessArray[i] === answerArray[j]) {
          suitMatches++;
          answerArray.splice(j, 1);
          break;
        }
      }
    }

    const redDotMatches = exactMatches;
    const yellowDotMatches = suitMatches - exactMatches;

    for (let i = 0; i < redDotMatches; i++) {
      dotsArray.push(<RedDot key={`red-${i}`} />);
    }

    for (let i = 0; i < yellowDotMatches; i++) {
      dotsArray.push(<YellowDot key={`yellow-${i}`} />);
    }

    switch (row) {
      case 0:
        setDots(dotsArray);
        break;
      case 1:
        setDots1(dotsArray);
        break;
      case 2:
        setDots2(dotsArray);
        break;
      case 3:
        setDots3(dotsArray);
        break;
      case 4:
        setDots4(dotsArray);
        break;
      case 5:
        setDots5(dotsArray);
        break;
    }

    setRow(row + 1);
    setRedDots(redDotMatches);
  };

  return (
    <>
      <h1 className="text-2xl font-medium font-serif tracking-widest text-slate-200 mb-3">SKOČKO QUIZ GAME</h1>
      <NewGameButton generateSecretCode={resetGame} />
      <div className="flex mb-5">
        <CodePegBoard
          selectedSuits={selectedSuits}
          selectedSuits1={selectedSuits1}
          selectedSuits2={selectedSuits2}
          selectedSuits3={selectedSuits3}
          selectedSuits4={selectedSuits4}
          selectedSuits5={selectedSuits5}
          secretCode={secretCode}
          redDots={redDots}
          row={row}
        />
        <KeyPegBoard dots={dots} dots1={dots1} dots2={dots2} dots3={dots3} dots4={dots4} dots5={dots5} />
      </div>
      <SuitButtonsRow pushSuit={pushSuit} />
      <Button text={"CHECK RESULT"} onClick={checkResult} />
      <Button text={"UNDO SYMBOL"} onClick={undoSuit} />
    </>
  );
}

export default App;
