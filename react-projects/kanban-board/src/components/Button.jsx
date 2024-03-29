import React from 'react'

const Button = ({buttonText, onClick, type}) => {
  return (
    <>
    <button className="bg-slate-300 py-1.5 px-8 mb-4 mx-10 rounded shadow-md" onClick={onClick} type={type}>
        {buttonText}
    </button>
    </>
  )
}

export default Button