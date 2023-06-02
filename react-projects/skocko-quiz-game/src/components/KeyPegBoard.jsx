import React from 'react'
import KeyPegRow from './KeyPegRow'

const KeyPegBoard = () => {
  return (
    <div className='flex flex-col gap-3 pt-1 pl-3'>
        <KeyPegRow/>
        <KeyPegRow/>
        <KeyPegRow/>
        <KeyPegRow/>
        <KeyPegRow/>
        <KeyPegRow/>
    </div>
  )
}

export default KeyPegBoard