import React from 'react'
import CodePeg from './CodePeg'

const CodePegRow = () => {
  return (
    <div className='flex gap-2'>
      <CodePeg/>
      <CodePeg/>
      <CodePeg/>
      <CodePeg/>
    </div>
  )
}

export default CodePegRow