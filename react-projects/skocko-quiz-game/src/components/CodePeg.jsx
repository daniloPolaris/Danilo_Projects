import React from "react";

const CodePeg = ({ selectedSuit, selectedSuit1, selectedSuit2, selectedSuit3, selectedSuit4, selectedSuit5 }) => {
  return (
    <div className="h-10 w-10 bg-slate-200 rounded-xl flex justify-center items-center">
      {selectedSuit}
      {selectedSuit1}
      {selectedSuit2}
      {selectedSuit3}
      {selectedSuit4}
      {selectedSuit5}
    </div>
  );
};

export default CodePeg;
