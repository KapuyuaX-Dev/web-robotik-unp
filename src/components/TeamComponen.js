import React, { useEffect } from 'react'
import '../style/TeamsComponent.css'
import { Container, Row } from 'react-bootstrap'
import Aos from "aos";


export function Intro({imageSrc}) {
  return (
    <>
      <div className='banner mt-5'>
        <img className='mt-3' src={process.env.PUBLIC_URL+imageSrc} alt='Banner'/>
      </div>
    </>
  )
}

export function About({team,description,logo}){
  useEffect(()=>{
    Aos.init({duration:2000});
},[])
  return(
    <div data-aos="fade-up" className="aboutSection">
        <Container className="fluid d-md-flex justify-content-center">
            <div className="aboutTeam">
                <h3>About {team}</h3>
                        <Row className="about-description">
                            <div className="kiri"><img src={process.env.PUBLIC_URL+logo} alt='logo'></img></div>
                            <div className="kanan"><p>{description}</p>
                            </div>
                        </Row> 
            </div>  
        </Container>
        </div>
  )
}
