import React from 'react'
import KeyPeg from './KeyPeg'

const KeyPegRow = () => {
  return (
    <div className='flex gap-2'>
        <KeyPeg/>
        <KeyPeg/>
        <KeyPeg/>
        <KeyPeg/>
    </div>
  )
}

export default KeyPegRow