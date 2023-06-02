import React from "react";
import CodePegRow from './CodePegRow.jsx';

const CodePegBoard = () => {
  return (
    <div className="flex flex-col gap-3 pr-4 pt-1 pb-3 border-r-2">
      <CodePegRow />
      <CodePegRow />
      <CodePegRow />
      <CodePegRow />
      <CodePegRow />
      <CodePegRow />
      <hr className="mb-1 border-t-2 border-slate-200"/>
      <CodePegRow />
    </div>
  );
};

export default CodePegBoard;
