import React from "react";

const NewGameButton = ({ generateSecretCode }) => {
  return (
    <>
      <button
        className="text-slate-300 text-xs border-2 rounded-md border-slate-400 p-4 mb-6"
        onClick={generateSecretCode}
      >
        NEW GAME
      </button>
    </>
  );
};

export default NewGameButton;
