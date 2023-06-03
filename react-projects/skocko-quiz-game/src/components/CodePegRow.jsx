// import React from 'react'
// import CodePeg from './CodePeg'

// const CodePegRow = ({selectedSuits, secretCode}) => {
//   return (
//     <div className='flex gap-2'>
//       <CodePeg selectedSuit={Array.isArray(selectedSuits) && selectedSuits[0]} secretCode={Array.isArray(secretCode) && secretCode[0]}/>
//       <CodePeg selectedSuit={Array.isArray(selectedSuits) && selectedSuits[1]} secretCode={Array.isArray(secretCode) && secretCode[1]}/>
//       <CodePeg selectedSuit={Array.isArray(selectedSuits) && selectedSuits[2]} secretCode={Array.isArray(secretCode) && secretCode[2]}/>
//       <CodePeg selectedSuit={Array.isArray(selectedSuits) && selectedSuits[3]} secretCode={Array.isArray(secretCode) && secretCode[3]}/>
//     </div>
//   )
// }

// export default CodePegRow


import React from 'react'
import CodePeg from './CodePeg'

const CodePegRow = ({ selectedSuits, secretCode }) => {
  return (
    <div className='flex gap-2'>
      {secretCode ? (
        secretCode.map((peg, index) => (
          <CodePeg key={index} selectedSuit={peg} />
        ))
      ) : (
        <>
          <CodePeg selectedSuit={Array.isArray(selectedSuits) && selectedSuits[0]} />
          <CodePeg selectedSuit={Array.isArray(selectedSuits) && selectedSuits[1]} />
          <CodePeg selectedSuit={Array.isArray(selectedSuits) && selectedSuits[2]} />
          <CodePeg selectedSuit={Array.isArray(selectedSuits) && selectedSuits[3]} />
        </>
      )}
    </div>
  );
}

export default CodePegRow

// import React from "react";
// import CodePeg from "./CodePeg";

// const CodePegRow = ({ selectedSuits, secretCode }) => {
//   return (
//     <div className="flex gap-2">
//       {secretCode ? (
//         secretCode.map((peg, index) => <CodePeg key={index} selectedSuit={peg} />)
//       ) : selectedSuits ? (
//         selectedSuits.map((peg, index) => <CodePeg key={index} selectedSuit={peg} />)
//       ) : null}
//     </div>
//   );
// };

// export default CodePegRow;
// OVAKO SE STAMPA I SVAKA KUCICA TEK KAD SE UNESE ZNAK


