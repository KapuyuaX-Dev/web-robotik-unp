import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Teams from '../components/Teams';
import Galery from '../components/Galery';
import Sponsors from '../components/Sponsors';
import Achievement from '../components/Achievement';

function HomePage() {
  return (
    <div>
      <div><Header/></div>
      <div>
      <Home/>
      <Teams/>
      <Achievement/>
      <Galery/>
      </div>
      <div className='footer'><Footer/></div>
    </div>
  )
}

export default HomePage