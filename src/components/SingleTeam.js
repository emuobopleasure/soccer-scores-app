import React from 'react'

const SingleTeam = () => {
  return (
    <div>
        <div className='team-row font-semibold text-[#6c757d] flex items-center py-[5px] border-b-[0.5px] border-[#dedede] hover:shadow-[0_0.125rem_0.25rem_rgba(0,_0,_0,_0.1)] cursor-pointer'>
         <div className='position m-[5px] min-w-[30px] text-center'>
            1
         </div>
         <div className='team-name flex items-center font-medium text-left m-[5px] min-w-[200px]'>
            <div className='emblem min-w-[30px] w-[30px] max-w-[30px] m-[5px] mr-[10px]'>
                <img src='https://crests.football-data.org/ELC.png' alt='emblem image' className='emblem h-auto max-w-full'/>
            </div>
            AC Ajacio
         </div>
         <div className='mp t-row'>0</div>
        <div className='win t-row'>0</div>
        <div className='draw t-row'>0</div>
        <div className='lose t-row'>0</div>
        <div className='gf t-row'>0</div>
        <div className='ga t-row'>0</div>
        <div className='points t-row'>0</div>
        </div>
    </div>
  )
}

export default SingleTeam