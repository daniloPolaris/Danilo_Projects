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

  useEffect(() => {
    generateSecretCode();
  }, []);

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
  // const checkResult = () => {
  //   let exactMatches = 0;
  //   let suitMatches = 0;
  //   const selectedValues = selectedSuits.map((suit) => suit.props.value);
  //   const secretValues = secretCode.map((code) => code.props.value);

  //   for (let i = 0; i < 4; i++) {
  //     if (selectedValues[i] === secretValues[i]) {
  //       exactMatches++;
  //       console.log('exact match');
  //     } else if (secretValues.includes(selectedValues[i])) {
  //       suitMatches++;
  //       console.log('suit match');
  //     }
  //   }

  //   console.log('Exact Matches:', exactMatches);
  //   console.log('Suit Matches:', suitMatches);
  // };

  const checkResult = () => {
    let exactMatches = 0;
    let suitMatches = 0;
    const guessArray = selectedSuits.map(item => item.props.value);
    const answerArray = secretCode.map(item => item.props.value);

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
        }
      }
    }
    const yellowDotMatches = suitMatches - exactMatches;
    console.log(exactMatches, yellowDotMatches);
  };

  // const checkResult = () => {
  //   let exactMatches = 0;
  //   let suitMatches = 0;
  //   const nesto = secretCode.map(item => item.props.value);
  //   console.log(nesto);
  //   for (let i = 0; i < 4; i++) {
  //     if (selectedSuits[i].props.value === secretCode[i].props.value) {
  //       exactMatches++;
  //     } else if (nesto.includes(selectedSuits[i].props.value)) {
  //       suitMatches++;
  //     }
  //   }
  //   const notInTheRightSpotMatches = suitMatches - exactMatches;
  //   console.log(exactMatches, notInTheRightSpotMatches);
  // };

  // const checkResultDODAJ = () => {
  //   if (selectedSuits === secretCode || numberOfGuesses = 6) {
  //     setGameOver(true);
  //   }
  // }
  // const getFeedback = () => {
  //   let exactMatches = 0;
  //   let suitMatches = 0;
  //   for (let i = 0; i < 4; i++) {
  //     if (selectedSuits[i] === secretCode[i]) {
  //       exactMatches++;
  //     } else if (secretCode.includes(selectedSuits[i])) {
  //       suitMatches++;
  //     }
  //   }
  //   return { exactMatches, suitMatches };
  // };
  // // dodati renderovanje RedDot i YellowDot-sa

  // // NEKAKO SRACUNAJ numberOfGuesses kad pravis f-ju za pisanje u novom redu
  // // staviti u okviru gameOver da li je secretCode visible i da ne moze da se unosi vise pokusaja
  // const [isSecretCodeVisible, setIsSecretCodeVisible] = useState(false);
  // function revealSecretCode() {
  //   // dodaj uslov kada je gotova igra da je true i u codePegRow-u stavis uslov da se renderuje ako je true
  //   setIsSecretCodeVisible(true);
  // }

  // SAMO PROSLEDI gameOver DO CodePegRow-a i napravi if uslov za stampanje
  // const [gameOver, setGameOver] = useState(false);

  return (
    <>
      <h1 className="text-2xl font-medium font-serif tracking-widest text-slate-200 mb-3">SKOČKO QUIZ GAME</h1>
      <NewGameButton generateSecretCode={generateSecretCode} />
      <div className="flex mb-5">
        <CodePegBoard selectedSuits={selectedSuits} secretCode={secretCode} />
        <KeyPegBoard />
      </div>
      <SuitButtonsRow pushSuit={pushSuit} />
      <Button text={"CHECK RESULT"} onClick={checkResult} />
      <Button text={"UNDO SYMBOL"} onClick={undoSuit} />
    </>
  );
}

export default App;
