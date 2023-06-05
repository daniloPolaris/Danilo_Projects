import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button className="bg-slate-200 py-2 px-20 rounded-lg text-xs font-semibold text-slate-400 mb-4" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
