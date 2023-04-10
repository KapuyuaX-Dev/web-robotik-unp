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
    description:"ROBANA (Robot Antisipasi Corona) merupakan robot berbasis image processing dengan menerapkan metode machine learning yang dikendalikan oleh mini PC. Robana berfungsi sebagai robot penjaga pintu masuk Research Center Universitas Negeri Padang. Robot ini dilengkapi dengan fitur mampu mendeteksi penggunaan masker, suhu tubuh, dan penggunaan hand sanitizer otomatis. Selain itu, robot ini mampu memberikan instruksi dan peringatan kepada pengguna yang tidak menggunakan masker atau suhu tubuh diatas 37.8°C."
    },
    {
      title:"Bilik Sterilisasi",
      image:'/image/bilikSterilisasi.png',
      description:"Bilik Sterilisasi merupakan alat yang diciptakan guna memutus rantai penyebaran Covid-19 di masyarakat. Cara kerja alat ini yaitu menyemprotkan cairan desinfektan Ketika mendeteksi adanya orang berada di dalam bilik sterilisasi ini. Alat ini menggunakan sensor proximixy untuk mendeteksi adanya orang di dalam dan menggunakan cairan desinfektan yang aman untuk kulit manusia."
    },
    {
      title:"Automatic Handsanitizer Dispenser",
      image:'/image/sanitizer.png',
      description:"Automatic Handsanitizer Dispenser merupakan handsanitizer otomatis yang diciptakan guna memutus rantai penyebaran Covid-19 di masyarakat. Handsinitizer ini dilengkapi sensor suhu yang berfungsi mendeteksi suhu pengguna dan lcd yang akan menampilkan hasil pembacaan suhu tubuhnya pada saat itu. Alat ini juga dilengkapi dengan buzzer sebagai alarm peringatan yang dapat berbunyi ketika mendeteksi suhu pengguna diatas suhu normal manusia yaitu >37.8°C"
      },
    {
      title:"Automatic Bin Upe",
      image:'/image/binUpe.png',
      description:"Automatic Bin UPE (Unic, Profitable, and Environment Socialable) merupakan sebuah inovasi tempat sampah otomatis yang dibuat dalam rangka menarik minat masyarakat dalam membuang sampah. Alat ini dirancang layaknya mesin ATM namun memiliki sedikit perbedaan dalam sistem kerjanya. Prinsip Kerja alat yaitu apabila seseorang memasukan sampah botol plastik ke dalam Automatic Bin UPE, maka alat secara otomatis dapat menghitung jumlah sampah yang masuk dengan harga masing-masing botol yang sudah ditentukan. Setelah semua sampah botol dimasukkan maka akan keluar kupon yang menampilkan total harga dari pembuangan sampah"
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