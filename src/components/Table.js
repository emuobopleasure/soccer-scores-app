import React from 'react'
import SingleTeam from './SingleTeam'

const Table = () => {
  return (
    <div>
        <div className='standing-body shadow-[0_0.5rem_1rem_rgba(0,_0,_0,_0.275)] rounded-[8px] mb-[2rem] overflow-x-auto'>
            <div className='standings-table py-[2rem] px-[1rem] w-fit'>
                <div className='table-row-header font-semibold text-[#6c757d] flex items-center py-[5px] border-b-[0.5px] border-[#dedede]'>
                    <div className='position flex-1 m-[5px] min-w-[30px] text-center'></div>
                    <div className='team-name text-left min-w-[200px]'>Team</div>
                    <div className='mp t-head'>MP</div>
                    <div className='win t-head'>W</div>
                    <div className='draw t-head'>D</div>
                    <div className='lose t-head'>L</div>
                    <div className='gf t-head'>GF</div>
                    <div className='ga t-head'>GA</div>
                    <div className='points t-head'>Pts</div>
                </div>
                <SingleTeam/>
            </div>
        </div>
    </div>
  )
}

export default Table