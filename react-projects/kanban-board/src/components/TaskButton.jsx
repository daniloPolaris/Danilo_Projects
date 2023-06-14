import React from 'react'

const Button = ({buttonText}) => {
  return (
    <>
    <button className="text-lg bg-slate-300 rounded px-3 ml-2">
        {buttonText}
    </button>
    </>
  )
}

export default Button