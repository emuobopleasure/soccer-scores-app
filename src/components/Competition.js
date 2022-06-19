import React from 'react'

const Competition = () => {
  return (
    <div className='competition-card mb-[1.5rem] w-full md:max-w-full'>
        <div className='card-inner flex items-center p-[1.5rem] h-full shadow-[0_0.4rem_1rem_rgb(0_0_0_/_18%)] rounded-sm text-[#4d4d4d] cursor-pointer hover:shadow-[0_0.4rem_1.5rem_rgb(0_0_0_/_18%)]'>
          <div className='competition-emblem w-[30%] max-w-[80px] mr-[10px]'>
            <img src='https://crests.football-data.org/ELC.png' alt='emblem image' className='emblem max-h-[100px] max-w-full h-auto'/>
          </div>
          <div className='competition-details'>
            <h4 className='competion-name mb-[0.25rem] text-[1.25rem] font-semibold'>
              Championship
            </h4>
            <p className='competition-country text-[80%] font-normal'>
              England
            </p>
          </div>
        </div>
    </div>
  )
}

export default Competition