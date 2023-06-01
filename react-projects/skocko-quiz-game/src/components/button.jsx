import React from "react";

const Button = ({ title, naKlik }) => {
  let mySecret = "Nemanja ima zivce za mene";
  return (
    <>
      <div>Button</div>
      <button className="p-4 rounded-xl bg-slate-800 text-gray-400" onClick={() => {naKlik(mySecret)}}>
        {title ? title : "Nema titla"}
      </button>
    </>
  );
};

export default Button;
