import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Matches from './Matches'
import Table from './Table'

const LeagueTable = () => {

    const [tabSwitch, setTabSwitch] = useState(false);

    // const handleSwitch = () => {
    //     setTabSwitch(true);
    // }

  return (
    <section>
        <div className='league-table max-w-[700px] bg-[#fff] relative bottom-[3.1rem] mx-auto rounded-[0.25rem;] border border-[#dfdfdf]'>
            <div className='inner-section p-[20px] flex flex-col'>
                <div className='section-title py-[0.5rem] mb-[1rem]'>
                    <a href='#/' className='fancy-link'>
                        All Competitions
                    </a>
                    <span className='divider mx-[0.5rem]'>
                        /
                    </span>
                    <span className='league-title-header text-[#6c757d]'>
                        Bundesliga
                    </span>
                </div>
                <h1 className='league-title text-[#347ab8]  text-[1.5rem] leading-[1.2] font-semibold mb-[0.5rem]'>
                    Bundesliga
                </h1>
                <div className='table-tabs bg-[#dd7c00] text-[#fff] my-5 flex justify-around mx-[-15px]'>
                    { 
                    <div className='standing'>
                        <div className='active mx-auto text-center p-[5px] mt-[10px] text-[20px] font-medium cursor-pointer'>
                            <h4 className='tab-header' onClick={() => setTabSwitch(false)}>
                                STANDINGS
                            </h4>
                        </div>
                    </div>
                    }
                    <div className='matches'>
                        <div className='active mx-auto text-center p-[5px] mt-[10px] text-[20px] font-medium cursor-pointer'>
                            <h4 className='tab-header' onClick={() => setTabSwitch(true)}>
                                MATCHES
                            </h4>
                        </div>
                    </div>
                </div>
                <div className='tab-body'>
                    { tabSwitch ? 
                    <Matches/>
                    :
                    <Table/> }
                </div>
            </div>
        </div>
    </section>
  )
}

export default LeagueTable