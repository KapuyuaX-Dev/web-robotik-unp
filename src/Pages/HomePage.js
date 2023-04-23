import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Teams from '../components/Teams';
import Galery from '../components/Galery';
import Achievement from '../components/Achievement';
import { Ring } from 'react-awesome-spinners'

function HomePage() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  if(loading){
    return(
        <div className='d-flex flex-column align-items-center justify-content-center my-5'>
          <Ring/>
          <h3>Loading</h3>
        </div>
    )
  }
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