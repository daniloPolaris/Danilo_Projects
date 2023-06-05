import React from "react";

const KeyPeg = ({ dot, dot1, dot2, dot3, dot4, dot5 }) => {
  return (
    <div className="h-10 w-10 bg-slate-200 rounded-full flex justify-center items-center">
      {dot}
      {dot1}
      {dot2}
      {dot3}
      {dot4}
      {dot5}
    </div>
  );
};

export default KeyPeg;
