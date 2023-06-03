import React from "react";
import CodePegRow from './CodePegRow.jsx';

const CodePegBoard = ({selectedSuits, secretCode}) => {
  return (
    <div className="flex flex-col gap-3 pr-4 pt-1 pb-3 border-r-2">
      <CodePegRow selectedSuits={selectedSuits} />
      <CodePegRow />
      <CodePegRow />
      <CodePegRow />
      <CodePegRow />
      <CodePegRow />
      <hr className="mb-1 border-t-2 border-slate-200"/>
      <CodePegRow secretCode={secretCode} />
    </div>
  );
};

export default CodePegBoard;
