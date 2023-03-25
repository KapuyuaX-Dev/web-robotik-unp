import React from 'react'
import { Card, Col, Container, Row, Image} from 'react-bootstrap'
import kraiImage from "../assets/image/krai.png"
import krsbiImage from "../assets/image/krsbi.png"
import krsriImage from "../assets/image/krsri.png"
import krstiImage from "../assets/image/krsti.png"
import krtmiImage from "../assets/image/krtmi.png"
import krtiImage from "../assets/image/krti.png"
import { Link } from 'react-router-dom'

function Teams() {
  return (
    <div id='teams' className="teams">
      <h2><span>TEAMS</span></h2>
      <br></br><br></br>
      <Container>
        <Row>
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
        <Row>
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