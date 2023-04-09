import React, { useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import '../style/News.css'
import banner from '../assets/image/newsBanner.jpg'

import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function NewsSection() {
  useEffect(()=>{
    Aos.init({duration:2000});
},[])
  const navigate = useNavigate()
  const [news, setNews] = useState([
  {
    title:'News Title',
    date: '29/03/2023, 21:07 WIB',
    text: "Some quick example text to build on the card title and make up the bulk of the card's content"
  },
  {
    title:'News Title',
    date: '31/03/2023, 21:07 WIB',
    text: "Some quick example text to build on the card title and make up the bulk of the card's content"
  }
  ,
  {
    title:'News Title',
    date: '31/03/2023, 21:07 WIB',
    text: "Some quick example text to build on the card title and make up the bulk of the card's content"
  },
  {
    title:'News Title',
    date: '31/03/2023, 21:07 WIB',
    text: "Some quick example text to build on the card title and make up the bulk of the card's content"
  }
  ,
  {
    title:'News Title',
    date: '31/03/2023, 21:07 WIB',
    text: "Some quick example text to build on the card title and make up the bulk of the card's content"
  }
  
  ])

  return (
    <div className='news'>
        <Container>
           <h2>NEWS</h2>
           <div className='d-lg-flex justify-items-center news-item align-content-center'>
            {
              news.map((news,i)=>(
                <Card data-aos="fade-up" key={i} style={{width:'15rem', margin:'10px'}}>
                  <Card.Img variant='top' src={banner} alt='news-Image'/>
                  <Card.Body>
                    <Card.Title>{news.title}</Card.Title>
                    <p className="mt-2 text-muted fs-6 fw-light">29/03/2023, 21:07 WIB</p> 
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.                  
                    </Card.Text>
                    <Button className='float-end'>Read more</Button>
                  </Card.Body>
              </Card>
              ))
            }
           </div>
           {/* <Button className='float-end'>More News</Button> */}
        </Container>
        <Container className='d-flex align-items-center justify-content-end'>
          <div data-aos="fade-up" className='more' onClick={()=>navigate('/news')}>More News→</div>
        </Container>
    </div>
  )
}

export default NewsSection