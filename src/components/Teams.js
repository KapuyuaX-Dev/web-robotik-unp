import React from 'react'
import { Card, Col, Container, Row, Image} from 'react-bootstrap'
import kraiImage from "../assets/image/krai.png"
import krsbiImage from "../assets/image/krsbi.png"
import krsriImage from "../assets/image/krsri.png"
import krstiImage from "../assets/image/krsti.png"
import krtmiImage from "../assets/image/krtmi.png"
import krtiImage from "../assets/image/krti.png"
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
        <Row data-aos="fade-up">
          <Col xs lg="4">
            <div className='text-center'>
            <Link to="/KRAI"><img src={kraiImage}></img></Link></div>
          </Col>
          <Col xs lg="4">
          <div className='text-center'>
          <Link to="/KRSBI"><img src={krsbiImage}></img></Link></div>
          </Col>
          <Col xs lg="4">
          <div className='text-center'>
          <Link to="/KRSTI"><img src={krstiImage}></img></Link></div>
          </Col>
        </Row>
        <br></br><br></br>
        <Row data-aos="fade-up">
          <Col xs lg="4">
          <div className='text-center'>
          <Link to="/KRSRI"><img src={krsriImage}></img></Link></div>
          </Col>
          <Col xs lg="4">
          <div className='text-center'>
          <Link to="/KRTMI"><img src={krtmiImage}></img></Link></div>
          </Col>
          <Col xs lg="4">
          <div className='text-center'>
          <Link to="/KRTI"><img src={krtiImage}></img></Link></div>
          </Col>
        </Row>
      </Container>
      <br></br>
    </div>
  )
}

export default Teams