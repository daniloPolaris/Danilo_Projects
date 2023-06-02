import React from 'react'
import KeyPegRow from './KeyPegRow'

const KeyPegBoard = () => {
  return (
    <div className='flex flex-col gap-4'>
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