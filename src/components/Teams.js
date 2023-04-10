import React from 'react'
import { Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../style/Teams.css'
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

function Teams() {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])

  return (
    <div id='teams' className="teams">
      <Container>
        <h2 data-aos="fade-up">TEAMS</h2>
        <Container className='d-md-flex justify-content-center align-items-center flex-wrap text-center logo'>
            <Link data-aos="fade-up" to="/KRAI"><img src={process.env.PUBLIC_URL+'/image/krai.png'}></img></Link>
            <Link data-aos="fade-up" to="/KRSBI"><img src={process.env.PUBLIC_URL+'/image/krsbi.png'}></img></Link>
            <Link data-aos="fade-up" to="/KRSTI"><img src={process.env.PUBLIC_URL+'/image/krsti.png'}></img></Link>
            <Link data-aos="fade-up" to="/KRSRI"><img src={process.env.PUBLIC_URL+'/image/krsri.png'}></img></Link>
            <Link data-aos="fade-up" to="/KRTMI"><img src={process.env.PUBLIC_URL+'/image/krtmi.png'}></img></Link>
            <Link data-aos="fade-up" to="/KRTI"><img src={process.env.PUBLIC_URL+'/image/krti.png'}></img></Link>
        </Container>
      </Container>
      <br></br>
    </div>
  )
}

export default Teams