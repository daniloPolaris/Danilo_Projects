import { useState } from "react";
import Button from "./components/button";
import CodePegBoard from "./components/CodePegBoard";
import KeyPegBoard from "./components/KeyPegBoard";

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
      <h1>SKOČKO QUIZ GAME</h1>
      <div className="flex">
        <CodePegBoard />
        <KeyPegBoard />
      </div>

      {/* <Button naKlik={getSecret} title={"Ima titla"} />
      <p>Kliknuto {counter} puta</p>
      <p>Tajna poruka : {secret}</p> */}
    </>
  );
}

export default App;
