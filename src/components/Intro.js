import React from 'react'
import banner from '../assets/bg/intro.jpg'
import '../style/Intro.css'

function Intro() {
  return (
    <div className='banner'>
        <img src={banner}/>
    </div>
  )
}

export default Intro