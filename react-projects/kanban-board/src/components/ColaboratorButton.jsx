import React from 'react'

const ColaboratorButton = ({onClick}) => {
  return (
    <>
    <button className="text-lg bg-slate-300 rounded px-3 ml-2" onClick={onClick}>
        Add collaborator
    </button>
    </>
  )
}

export default ColaboratorButton

