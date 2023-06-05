import React from "react";
import KeyPeg from "./KeyPeg";

const KeyPegRow = ({ dots, dots1, dots2, dots3, dots4, dots5 }) => {
  return (
    <div className="flex gap-2 justify-center items-center">
      <KeyPeg
        dot={Array.isArray(dots) && dots[0]}
        dot1={Array.isArray(dots1) && dots1[0]}
        dot2={Array.isArray(dots2) && dots2[0]}
        dot3={Array.isArray(dots3) && dots3[0]}
        dot4={Array.isArray(dots4) && dots4[0]}
        dot5={Array.isArray(dots5) && dots5[0]}
      />
      <KeyPeg
        dot={Array.isArray(dots) && dots[1]}
        dot1={Array.isArray(dots1) && dots1[1]}
        dot2={Array.isArray(dots2) && dots2[1]}
        dot3={Array.isArray(dots3) && dots3[1]}
        dot4={Array.isArray(dots4) && dots4[1]}
        dot5={Array.isArray(dots5) && dots5[1]}
      />
      <KeyPeg
        dot={Array.isArray(dots) && dots[2]}
        dot1={Array.isArray(dots1) && dots1[2]}
        dot2={Array.isArray(dots2) && dots2[2]}
        dot3={Array.isArray(dots3) && dots3[2]}
        dot4={Array.isArray(dots4) && dots4[2]}
        dot5={Array.isArray(dots5) && dots5[2]}
      />
      <KeyPeg
        dot={Array.isArray(dots) && dots[3]}
        dot1={Array.isArray(dots1) && dots1[3]}
        dot2={Array.isArray(dots2) && dots2[3]}
        dot3={Array.isArray(dots3) && dots3[3]}
        dot4={Array.isArray(dots4) && dots4[3]}
        dot5={Array.isArray(dots5) && dots5[3]}
      />
    </div>
  );
};

export default KeyPegRow;
