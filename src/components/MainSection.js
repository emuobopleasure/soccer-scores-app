import React from 'react'
import { Link } from 'react-router-dom'
import Competition from './Competition'

const MainSection = () => {
  return (
    <main>
        <div className='main-section max-w-[700px] bg-[#fff] relative bottom-[3.1rem] mx-auto rounded-[0.25rem;] border border-[#dfdfdf]'>
            <div className='inner-section p-[20px] flex flex-col'>
                <h1 className='section-title text-[1.5rem] font-medium mb-[0.5rem] leading-[1.2] font-[`Montserrat`]'>
                    <strong>All Competitions</strong>
                </h1>
                <div className='cards-row grid grid-cols-1 md:grid-cols-2 gap-x-[1.8rem]'>
                    <Link to='/league-table'>
                        <Competition/>
                    </Link>
                    <Competition/>
                    <Competition/>
                    <Competition/>
                </div>
            </div>
        </div>
    </main>
  )
}

export default MainSection