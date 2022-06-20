import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Competition from './Competition'

const MainSection = () => {
    const [competitions, setCompetitions] = useState(null)

    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("X-Auth-Token", "56800eec4a8f4e2d8e4b5ccadea9b65c"); 
        
        var requestOptions = { 
            method: 'GET', 
            headers: myHeaders, 
            redirect: 'follow' 
        } ;
        
        fetch("https://api.football-data.org/v4/matches", requestOptions) 
            .then(response => response.json()) 
            .then(result => console.log(result)) 
            .catch(error => console.log('error', error));
    }, [])
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