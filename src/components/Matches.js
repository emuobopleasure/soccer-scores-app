import React from 'react'
import SingleMatch from './SingleMatch'

const Matches = () => {
  return (
    <div>
        <div className='league-matches'>
            <h4 className='text-[1.5rem]'>
                Matchweek 1
            </h4>
            <div className='matches-row grid grid-cols-1 md:grid-cols-2 mx-[-15px]
            '>
                <SingleMatch/>
                <SingleMatch/>
                <SingleMatch/>
                <SingleMatch/>
            </div>
        </div>
    </div>
  )
}

export default Matches