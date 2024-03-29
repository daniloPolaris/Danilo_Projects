import React from 'react'

const Button = ({onClick}) => {
  return (
    <>
    <button className="text-lg bg-slate-300 rounded px-3 ml-2" onClick={onClick}>
        Create task
    </button>
    </>
  )
}

export default Button