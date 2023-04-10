import React from 'react'
import '../style/Intro.css'

function Intro() {
  return (
    <div className='banner'>
        <img src={process.env.PUBLIC_URL+'/image/bg/intro.jpg'}/>
    </div>
  )
}

export default Intro