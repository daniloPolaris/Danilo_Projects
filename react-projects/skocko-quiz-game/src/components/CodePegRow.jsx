import React from "react";
import CodePeg from "./CodePeg";

const CodePegRow = ({
  selectedSuits,
  selectedSuits1,
  selectedSuits2,
  selectedSuits3,
  selectedSuits4,
  selectedSuits5,
  secretCode,
  redDots,
  row,
}) => {
  return (
    <div className="flex gap-2">
      {redDots === 4 || row === 6 ? (
        secretCode.map((peg, index) => <CodePeg key={index} selectedSuit={peg} />)
      ) : (
        <>
          <CodePeg
            selectedSuit={Array.isArray(selectedSuits) && selectedSuits[0]}
            selectedSuit1={Array.isArray(selectedSuits1) && selectedSuits1[0]}
            selectedSuit2={Array.isArray(selectedSuits2) && selectedSuits2[0]}
            selectedSuit3={Array.isArray(selectedSuits3) && selectedSuits3[0]}
            selectedSuit4={Array.isArray(selectedSuits4) && selectedSuits4[0]}
            selectedSuit5={Array.isArray(selectedSuits5) && selectedSuits5[0]}
          />
          <CodePeg
            selectedSuit={Array.isArray(selectedSuits) && selectedSuits[1]}
            selectedSuit1={Array.isArray(selectedSuits1) && selectedSuits1[1]}
            selectedSuit2={Array.isArray(selectedSuits2) && selectedSuits2[1]}
            selectedSuit3={Array.isArray(selectedSuits3) && selectedSuits3[1]}
            selectedSuit4={Array.isArray(selectedSuits4) && selectedSuits4[1]}
            selectedSuit5={Array.isArray(selectedSuits5) && selectedSuits5[1]}
          />
          <CodePeg
            selectedSuit={Array.isArray(selectedSuits) && selectedSuits[2]}
            selectedSuit1={Array.isArray(selectedSuits1) && selectedSuits1[2]}
            selectedSuit2={Array.isArray(selectedSuits2) && selectedSuits2[2]}
            selectedSuit3={Array.isArray(selectedSuits3) && selectedSuits3[2]}
            selectedSuit4={Array.isArray(selectedSuits4) && selectedSuits4[2]}
            selectedSuit5={Array.isArray(selectedSuits5) && selectedSuits5[2]}
          />
          <CodePeg
            selectedSuit={Array.isArray(selectedSuits) && selectedSuits[3]}
            selectedSuit1={Array.isArray(selectedSuits1) && selectedSuits1[3]}
            selectedSuit2={Array.isArray(selectedSuits2) && selectedSuits2[3]}
            selectedSuit3={Array.isArray(selectedSuits3) && selectedSuits3[3]}
            selectedSuit4={Array.isArray(selectedSuits4) && selectedSuits4[3]}
            selectedSuit5={Array.isArray(selectedSuits5) && selectedSuits5[3]}
          />
        </>
      )}
    </div>
  );
};

export default CodePegRow;
