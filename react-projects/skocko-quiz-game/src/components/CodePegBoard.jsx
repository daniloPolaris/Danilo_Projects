import React from "react";
import CodePegRow from "./CodePegRow.jsx";

const CodePegBoard = ({
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
    <div className="flex flex-col gap-3 pr-4 pt-1 pb-3 border-r-2">
      <CodePegRow selectedSuits={selectedSuits} />
      <CodePegRow selectedSuits1={selectedSuits1} />
      <CodePegRow selectedSuits2={selectedSuits2} />
      <CodePegRow selectedSuits3={selectedSuits3} />
      <CodePegRow selectedSuits4={selectedSuits4} />
      <CodePegRow selectedSuits5={selectedSuits5} />
      <hr className="mb-1 border-t-2 border-slate-200" />
      <CodePegRow secretCode={secretCode} redDots={redDots} row={row} />
    </div>
  );
};

export default CodePegBoard;
