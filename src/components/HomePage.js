import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Teams from './Teams';
import Galery from './Galery';
import Sponsors from './Sponsors';
import Achievement from './Achievement';
import '../style/HomePage.css'

function HomePage() {
  return (
    <div>
      <div><Header/></div>
      <div>
      <Home/>
      <Teams/>
      <Achievement/>
      <Galery/>
      <Sponsors/>
      </div>
      <div className='footer'><Footer/></div>
    </div>
  )
}

export default HomePage