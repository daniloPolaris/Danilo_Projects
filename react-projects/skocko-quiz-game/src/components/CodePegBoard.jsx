import React from "react";
import CodePegRow from './CodePegRow.jsx';

const CodePegBoard = () => {
  return (
    <div className="flex flex-col gap-4">
      <CodePegRow />
      <CodePegRow />
      <CodePegRow />
      <CodePegRow />
      <CodePegRow />
      <CodePegRow />
    </div>
  );
};

export default CodePegBoard;
