import React from 'react'
import SuitButton from './SuitButton'
import StarSuit from './StarSuit'
import ClubSuit from './ClubSuit'
import SpadeSuit from './SpadeSuit'
import HeartSuit from './HeartSuit'
import DiamondSuit from './DiamondSuit'
import SkockoSuit from './SkockoSuit'

const SuitButtonsRow = () => {
  return (
    <div className='flex gap-5 mb-6'>
        <SuitButton suit={<StarSuit/>} />
        <SuitButton suit={<ClubSuit/>} />
        <SuitButton suit={<SpadeSuit/>}/>
        <SuitButton suit={<HeartSuit/>}/>
        <SuitButton suit={<DiamondSuit/>}/>
        <SuitButton suit={<SkockoSuit/>}/>
    </div>
  )
}

export default SuitButtonsRow