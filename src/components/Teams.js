import React from 'react'
import { Card, Col, Container, Row, Image} from 'react-bootstrap'
import kraiImage from "../assets/image/krai.png"
import krsbiImage from "../assets/image/krsbi.png"
import krsriImage from "../assets/image/krsri.png"
import krstiImage from "../assets/image/krsti.png"
import krtmiImage from "../assets/image/krtmi.png"
import krtiImage from "../assets/image/krti.png"

function Teams() {
  return (
    <div id='teams' className="teams">
      <h2><span>TEAMS</span></h2>
      <br></br><br></br>
      <Container>
        <Row>
          <Col xs lg="4">
            <div className='text-center'>
            <a href='/KRAI'><img src={kraiImage}></img></a></div>
          </Col>
          <Col xs lg="4">
          <div className='text-center'>
          <a href='/KRSBI'><img src={krsbiImage}></img></a></div>
          </Col>
          <Col xs lg="4">
          <div className='text-center'>
          <a href='/KRSTI'><img src={krstiImage}></img></a></div>
          </Col>
        </Row>
        <br></br><br></br>
        <Row>
          <Col xs lg="4">
          <div className='text-center'>
          <a href='/KRSRI'><img src={krsriImage}></img></a></div>
          </Col>
          <Col xs lg="4">
          <div className='text-center'>
          <a href='/KRTMI'><img src={krtmiImage}></img></a></div>
          </Col>
          <Col xs lg="4">
          <div className='text-center'>
          <a href='/KRTI'><img src={krtiImage}></img></a></div>
          </Col>
        </Row>
      </Container>
      <br></br>
    </div>
  )
}

export default Teams