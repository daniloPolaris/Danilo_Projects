import React from "react";

const SuitButton = ({suit, pushSuit}) => {
  return (
    <button className="h-12 w-12 bg-slate-200 rounded-lg flex justify-center items-center" onClick={pushSuit}>
      {suit}
    </button>
  );
};

export default SuitButton;
