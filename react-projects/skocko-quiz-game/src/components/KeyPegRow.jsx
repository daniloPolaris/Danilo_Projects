import React from 'react'
import KeyPeg from './KeyPeg'

const KeyPegRow = ({dots}) => {
  return (
    <div className='flex gap-2 justify-center items-center'>
        <KeyPeg dot={Array.isArray(dots) && dots[0]}/>
        <KeyPeg dot={Array.isArray(dots) && dots[1]}/>
        <KeyPeg dot={Array.isArray(dots) && dots[2]}/>
        <KeyPeg dot={Array.isArray(dots) && dots[3]}/>
    </div>
  )
}

export default KeyPegRow