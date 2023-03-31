import React, { useState } from 'react'
import { Card, Col, Container, Form, Row, Button, ButtonGroup, ToggleButton } from 'react-bootstrap'
import '../style/achievement.css'
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

function Achievement() {
  const [achievement, setAchievement] = useState([{
    year:2011,
    achievement:[
      'Juara Harapan Kontes Robot Fire Fighter Beroda Regional 1 Sumatera di Politeknik', 
      'Finalis Robot Fire Fighter Berkaki dan Beroda tingkat nasional'
    ]
  },
  {
    year:2013,
    achievement:[
      'Juara 3 Robot Soccer Humanoid Indonesia Tingkat Regional 1', 
      'Juara 2 Robot Seni Tari Indonesia Tingkat Regional 1', 
      'Finalis Tim di Unversitas Negeri Yogyakata Tingkat Nasional'
    ]
  },
  {
    year:2014,
    achievement:[
      'Juara Harapan 1 Robot Seni Tari Indonesia Tingkat Regional 1', 
      'Juara 3 Robot Soccer Humanoid Indonesia Tingkat Regional 1'
    ]
  },
  {
    year:2015,
    achievement:[
      'Juara 2 Tingkat Regional 1 Robot Pemadam Api Indonesia', 
      'Juara 3 Tingkat Regional 1 Robot Seni Tari Indonesia '
    ]
  },
  {
    year:2018,
    achievement:[
      'Juara 1 Robot Pemadam Api Indonesia Tingkat Regional 1'
    ]
  },
  {
    year:2019,
    achievement:[
      'Juara Kategori Best Design Robot Sepak Bola Beroda Tingkat Regional 1'
    ]
  },
  {
    year:2021,
    achievement:[
      'Juara 2 Kontes Robot Abu Indonesia tingkat Wilayah 1',
      'Juara 3 Kontes Robot Thematik Indonesia tingkat Wilayah I'
    ]
  },
  {
    year:2022,
    achievement:[
      'Finalis Kontes Robot Abu Indonesia tingkat Nasional di Institut Teknologi Sepuluh November (ITS)',
      'Finalis Kontes Robot Abu Indonesia tingkat Nasional di Institut Teknologi Sepuluh November (ITS)'
    ]
  }
])
document.title = "Robotik UNP";
useEffect(()=>{
    Aos.init({duration:2000});
},[])

const [tahun,setTahun] = useState(achievement.length-1)

const eventTrigger = e =>{
  setTahun(e.target.value)
}
  return (
    <div id='achievement' className='achievement'>
      <Container>
        <h2 data-aos="fade-up">ACHIEVEMENT & INVENTION</h2>
        </Container>
        <Container data-aos="fade-up" className='d-md-flex flex-wrap justify-content-center align-items-center'>
          <Card className='d-flex text-center align-items-center mt-4'>
            <h5 className='m-3 fontSize-1'>Kontes Robot Indonesia</h5>
            <img className='m-2' src='https://pusatprestasinasional.kemdikbud.go.id/uploads/event/y35PavpUxmU9BjQhg3nxnWD6K750ebKaB0vMO7Vu.png'/>
            <div className='d-flex text-center flex-wrap justify-content-evenly align-items-center'>
             <Form>
            {achievement.map((achievement,i)=>(
              <>
                  <ButtonGroup>
                  <ToggleButton
                  key={i}
                  id={`radio-${i}`}
                  type="radio"
                  variant="outline-primary"
                  name="radioKRI"
                  value={i}
                  checked={tahun==i}
                  onChange={eventTrigger}
                  >{achievement.year}
                    </ToggleButton> 
                  </ButtonGroup>
              </>
            ))}
              </Form> 
            </div>
          </Card>
          <Card className='d-flex align-items-center mt-4'>
            <ul>
            {
              achievement[tahun].achievement.map((achievement,i)=>(
                <li>{achievement}</li>
                ))
              }
            </ul>
            </Card>
        </Container>
        
        <Container data-aos="fade-up" className='d-md-flex flex-wrap justify-content-center align-items-center'>
          <Card className='d-flex text-center align-items-center mt-4'>
            <h5 className='m-3 fontSize-1'>Kontes Robot Terbang Indonesia</h5>
            <img className='m-2' src='https://pusatprestasinasional.kemdikbud.go.id/uploads/event/kDiotgDS94XN6Nz1UQ6hYIz0L9G6Y2eQ81VYxSgh.png'/>
            <div className='d-flex text-center flex-wrap justify-content-evenly align-items-center'>
             <Form>
                  <ButtonGroup>
                  <ToggleButton
                  key={1}
                  id={`radio-krti${1}`}
                  type="radio"
                  variant="outline-primary"
                  name="radioKRTI"
                  checked
                  value={0}
                  >2020
                    </ToggleButton> 
                  </ButtonGroup>
              </Form> 
            </div>
          </Card>
          <Card className='d-flex align-items-center mt-4'>
            <ul>
            
            </ul>
            </Card>
        </Container>
    </div>
  )
}

export default Achievement