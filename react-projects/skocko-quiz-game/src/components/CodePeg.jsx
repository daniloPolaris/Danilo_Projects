import React from "react";

const CodePeg = ({ selectedSuit }) => {
  return <div className="h-10 w-10 bg-slate-200 rounded-xl flex justify-center items-center">{selectedSuit}</div>;
};

export default CodePeg;
