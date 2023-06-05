import React from "react";
import KeyPegRow from "./KeyPegRow";

const KeyPegBoard = ({ dots, dots1, dots2, dots3, dots4, dots5 }) => {
  return (
    <div className="flex flex-col gap-3 pt-1 pl-3">
      <KeyPegRow dots={dots} />
      <KeyPegRow dots1={dots1} />
      <KeyPegRow dots2={dots2} />
      <KeyPegRow dots3={dots3} />
      <KeyPegRow dots4={dots4} />
      <KeyPegRow dots5={dots5} />
    </div>
  );
};

export default KeyPegBoard;
