import React from 'react'
import { Col, Container, Figure, Row } from 'react-bootstrap'
import img1 from '../assets/image/gallery/001.jpg'
import img2 from '../assets/image/gallery/002.JPG'

function Galery() {
  return (
    <div id='galery' className="home">
        <h2><span>GALLERY</span></h2>
        <Container className='pt-4'>
          <Row>
          <Col>
              <div className='text-center gallery-image'>
                <Figure>
                  <a href='#'><Figure.Image 
                  src={img2}
                  width={300}
                  alt='mubes2022'
                  /></a>
                  <Figure.Caption className='caption'>Musyawarah Besar 2022</Figure.Caption>
                </Figure>
              </div>
            </Col>
            
            <Col>
              <div className='text-center gallery-image'>
                <Figure>
                  <a href='#'><Figure.Image 
                  src={img1}
                  width={300}
                  alt='kri2019'
                  /></a>
                  <Figure.Caption className='caption'>Kontes Robot Indonesia 2019</Figure.Caption>
                </Figure>
              </div>
            </Col>

          </Row>
        </Container>
        <br></br>
    </div>
  )
}

export default Galery