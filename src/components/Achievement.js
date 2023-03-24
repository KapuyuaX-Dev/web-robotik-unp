import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Achievement() {
  return (
    <div id='achievement' className='home'>
        <h2><span>ACHIEVEMENT</span></h2>

        <Container>
          <Row>
            <Col xs lg="4">
              <div className='achievement-card text-center'>
                <div className='card-title'><h5>2011</h5></div>
                <div className='description'>
                  <ul>
                    <li>Juara Harapan Kontes Robot Fire Fighter Beroda Regional 1 Sumatera di Politeknik</li>
                    <li>Finalis Robot Fire Fighter Berkaki dan Beroda tingkat nasional.</li>
                  </ul>
                  </div>
                </div>
            </Col>
            <Col xs lg="4">
              <div className='achievement-card text-center'>
                <div className='card-title'><h5>2013</h5></div>
                <div className='description'>
                  <ul>
                    <li>Juara 3 Robot Soccer Humanoid Indonesia Tingkat Regional 1</li>
                    <li>Juara 2 Robot Seni Tari Indonesia Tingkat Regional 1</li>
                    <li>Finalis Tim di Unversitas Negeri Yogyakata Tingkat Nasional</li>
                  </ul>
                  </div>
                </div>
            </Col>
            <Col xs lg="4">
              <div className='achievement-card text-center'>
                <div className='card-title'><h5>2014</h5></div>
                <div className='description'>
                  <ul>
                    <li>Juara Harapan 1 Robot Seni Tari Indonesia Tingkat Regional 1</li>
                    <li>Juara 3 Robot Soccer Humanoid Indonesia Tingkat Regional 1</li>
                  </ul>
                  </div>
                </div>
            </Col>
          </Row>

          <Row>
            <Col xs lg="4">
              <div className='achievement-card text-center'>
                <div className='card-title'><h5>2015</h5></div>
                <div className='description'>
                  <ul>
                    <li>Juara 2 Tingkat Regional 1 Robot Pemadam Api Indonesia</li>
                    <li>Juara 3 Tingkat Regional 1 Robot Seni Tari Indonesia </li>
                  </ul>
                  </div>
                </div>
            </Col>
            <Col xs lg="4">
              <div className='achievement-card text-center'>
                <div className='card-title'><h5>2018</h5></div>
                <div className='description'>
                  <ul>
                    <li>Juara 3 Tingkat Regional 1 Robot Seni Tari Indonesia </li>
                  </ul>
                  </div>
                </div>
            </Col>
            <Col xs lg="4">
              <div className='achievement-card text-center'>
                <div className='card-title'><h5>2019</h5></div>
                <div className='description'>
                  <ul>
                    <li>Juara Kategori Best Design Robot Sepak Bola Beroda Tingkat Regional 1</li>
                  </ul>
                  </div>
                </div>
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default Achievement