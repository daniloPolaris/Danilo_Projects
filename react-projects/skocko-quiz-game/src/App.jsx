import { useState } from "react";

import CodePegBoard from "./components/CodePegBoard";
import KeyPegBoard from "./components/KeyPegBoard";
import NewGameButton from "./components/NewGameButton";
import SuitButtonsRow from "./components/SuitButtonsRow";
import Button from "./components/button";

function App() {
  // console.log("render");
  // const [counter, setCounter] = useState(0);
  // const novaFunkcija = () => {
  //   console.log("kliknuto");
  //   setCounter((prevState) => prevState + 1);
  //   setCounter((prevState) => prevState + 1);
  //   setCounter((prevState) => prevState + 1);
  //   setCounter((prevState) => prevState + 1);
  // };

  // const [secret, setSecret] = useState("");
  // function getSecret(secretText) {
  //   setSecret(secretText);
  // }

  return (
    <>
      <h1 className="text-2xl font-medium font-serif tracking-widest text-slate-200 mb-3">SKOČKO QUIZ GAME</h1>
      <NewGameButton />
      <div className="flex mb-5">
        <CodePegBoard />
        <KeyPegBoard />
      </div>
      <SuitButtonsRow />
      <Button text={'CHECK RESULT'} />
      <Button text={'UNDO SYMBOL'}/>
      {/* <Button naKlik={getSecret} title={"Ima titla"} />
      <p>Kliknuto {counter} puta</p>
      <p>Tajna poruka : {secret}</p> */}
    </>
  );
}

export default App;
