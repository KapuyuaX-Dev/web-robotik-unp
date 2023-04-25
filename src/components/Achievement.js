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
      'Finalis Kontes Robot Thematik Indonesia tingkat Nasional di Institut Teknologi Sepuluh November (ITS)'
    ]
  }
])

const [achievementKRTI, setAchievementKRTI] = useState([
  {
  year:2020,
  achievement:[
    'Finalis Kontes Robot Terbang Indonesia Racing Plane tingkat Nasional'
  ]
  },
  {
    year:2021,
    achievement:[
      'Finalis Kontes Robot Terbang Indonesia Racing Plane tingkat Nasional',
      'Finalis Kontes Robot Terbang Indonesia VTOL tingkat Nasional'
    ]
    }
])

  const [invention, setInvention] = useState([
    {
    title:"Robot Antisipasi Corona",
    image:'/image/robana.png',
    description:"ROBANA (Robot Antisipasi Corona) is an image processing-based robot that applies machine learning methods controlled by a mini PC. Robana serves as a guard robot at the entrance of the Research Center of Universitas Negeri Padang. This robot is equipped with features that can detect the use of masks, body temperature, and automatic hand sanitizer use. In addition, this robot is able to provide instructions and warnings to users who do not wear masks or have a body temperature above 37.8°C."
    },
    {
      title:"Bilik Sterilisasi",
      image:'/image/bilikSterilisasi.png',
      description:"Bilik Sterilisasi is a device created to break the chain of Covid-19 transmission in the community. The way this device works is by spraying disinfectant fluid when it detects that there is someone inside the sterilization chamber. The device uses a proximity sensor to detect the presence of a person inside and uses disinfectant fluid that is safe for human skin."
    },
    {
      title:"Automatic Handsanitizer Dispenser",
      image:'/image/sanitizer.png',
      description:"Automatic Handsanitizer Dispenser is an automatic handsanitizer created to break the chain of Covid-19 transmission in the community. This handsanitizer is equipped with a temperature sensor that functions to detect the user's body temperature, and an LCD that will display the body temperature reading at that time. This device is also equipped with a buzzer as a warning alarm that can sound when detecting a user's temperature above the normal human temperature, which is >37.8°C."
      },
    {
      title:"Automatic Bin Upe",
      image:'/image/binUpe.png',
      description:"The Automatic Bin UPE (Unic, Profitable, and Environment Socialable) is an innovation of an automatic trash can designed to attract people's interest in disposing of their waste properly. This device is designed like an ATM machine, but with a slightly different working system. The principle of the device is that when someone puts plastic bottles into the Automatic Bin UPE, the device can automatically count the number of items that have entered and calculate the price of each bottle that has been predetermined. After all the bottles have been deposited, a coupon will be issued, displaying the total price of the waste disposal."
      }
  ])

document.title = "Robotik UNP";
useEffect(()=>{
    Aos.init({duration:2000});
},[])

const [tahun,setTahun] = useState(achievement.length-1)
const [tahunKrti,setTahunKrti] = useState(achievementKRTI.length-1)

const eventTrigger = e =>{
  setTahun(e.target.value)
}

const eventKRTITrigger = e =>{
  setTahunKrti(e.target.value)
}

  return (
    <div id='achievement' className='achievement'>
      <Container>
        <h2 data-aos="fade-up">ACHIEVEMENT</h2>
        </Container>
        <Container data-aos="fade-up" className='d-md-flex flex-wrap justify-content-center align-items-center'>
          <Card className='d-flex text-center align-items-center mt-4'>
            <h5 className='m-3 fontSize-1'>Kontes Robot Indonesia</h5>
            <img className='m-2' src={process.env.PUBLIC_URL+'/image/KRILogo.png'}/>
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
            <img className='m-2' src={process.env.PUBLIC_URL+'/image/KRTILogo.png'}/>
            <div className='d-flex text-center flex-wrap justify-content-evenly align-items-center'>
              <Form>
             {
              achievementKRTI.map((achievement,i)=>(
                <ButtonGroup>
                <ToggleButton
                key={i}
                id={`radio-krti${i}`}
                type="radio"
                variant="outline-primary"
                name="radioKRTI"
                value={i}
                checked={tahunKrti==i}
                onChange={eventKRTITrigger}
                >{achievement.year}
                  </ToggleButton> 
                </ButtonGroup>
              ))
             }
                  
              </Form> 
            </div>
          </Card>
          <Card className='d-flex align-items-center mt-4'>
            <ul>
            {
                achievementKRTI[tahunKrti].achievement.map((achievement,i)=>(
                <li>{achievement}</li>
                ))
              }
            </ul>
            </Card>
        </Container>
        <Container>
        <h2 data-aos="fade-up">INNOVATION</h2>
        </Container>
        <Container className='d-flex mt-5 flex-wrap justify-content-evenly align-items-center align-content-center'>
              {
                invention.map((invention,i)=>(
                  <div data-aos="fade-up" key={i} className='invention'>
                    <h3>{invention.title}</h3>
                    <div className='description'>
                    <img src={process.env.PUBLIC_URL+invention.image} alt='img'/>
                    <p>{invention.description}</p>
                  </div>
                 </div>
                ))
              }
        </Container>

    </div>
  )
}

export default Achievement