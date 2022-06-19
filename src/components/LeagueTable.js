import React from 'react'
import { NavLink } from 'react-router-dom'
import SingleTeam from './SingleTeam'

const LeagueTable = () => {
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
                    <div className='standing'>
                        <div className='active mx-auto text-center p-[5px] mt-[10px] text-[20px] font-medium cursor-pointer'>
                            <NavLink to=''>
                            <h4 className='tab-header'>
                                STANDINGS
                            </h4>
                            </NavLink>
                        </div>
                    </div>
                    <div className='matches'>
                        <div className='active mx-auto text-center p-[5px] mt-[10px] text-[20px] font-medium cursor-pointer'>
                            <h4 className='tab-header'>
                                MATCHES
                            </h4>
                        </div>
                    </div>
                </div>
                <div className='tab-body'>
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
            </div>
        </div>
    </section>
  )
}

export default LeagueTable