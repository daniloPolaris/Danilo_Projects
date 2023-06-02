import React from 'react'
import KeyPeg from './KeyPeg'
import RedDot from './RedDot'
import YellowDot from './YellowDot'

const KeyPegRow = () => {
  return (
    <div className='flex gap-2 justify-center items-center'>
        <KeyPeg dot={<RedDot/>}/>
        <KeyPeg dot={<YellowDot/>}/>
        <KeyPeg/>
        <KeyPeg/>
    </div>
  )
}

export default KeyPegRow