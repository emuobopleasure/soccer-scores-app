import React from 'react'

const SingleMatch = () => {
  return (
    <div>
        <div className='match flex items-center p-[1.5rem] border-b-[0.5px] cursor-pointer hover:shadow-[0_0.8rem_1.5rem_rgba(0,_0,_0,_0.175)]'>
            <div className='match-details flex-[2]'>
                <div className='home-row mb-[20px] flex items-center'>
                    <div className='emblem max-w-[25px] mr-[10px]'>
                        <img src='download.png' alt='team-emblem' className='emblem max-w-full h-auto'/>
                    </div>
                    <h4 className='team-name text-[80%] font-normal leading-[1.2]'>
                        Toulouse FC
                    </h4>
                    <div className='outcome ml-auto'>
                        <strong className='score text-[18px] font-normal'></strong>
                    </div>
                </div>
                <div className='away-row flex items-center'>
                    <div className='emblem max-w-[25px] mr-[10px]'>
                        <img src='download.png' alt='team-emblem' className='emblem max-w-full h-auto'/>
                    </div>
                    <h4 className='team-name text-[80%] font-normal leading-[1.2]'>
                        OGC Nice
                    </h4>
                    <div className='outcome ml-auto'>
                        <strong className='score text-[18px] font-normal'></strong>
                    </div>
                </div>
            </div>
            <div className='match-day ml-[20px] text-center pl-[0.5rem] border-l-[1px] border-[#dee2e6]'>
                <p className='macth-date text-[80%] font-normal'>
                    08/07
                </p>
                <p className='match-time text-[80%] font-normal'>
                    18:00
                </p>
            </div>
        </div>
    </div>
  )
}

export default SingleMatch