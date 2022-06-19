import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className='footer mt-[3rem]'>
          <p className='owner text-[#6c757d] text-center mb-[1rem]'>
            Built by <a href='https://twitter.com/emuobodavis' className='fancy-link'>
              Emuobonuvie Pleasure
            </a>
          </p>
          <p className='api-source text-center mb-[1rem] text-[80%] font-normal'>
            Credits: <a href='https://www.football-data.org/' className='fancy-link'>
              Football data API
            </a>
          </p>
        </div>
    </footer>
  )
}

export default Footer