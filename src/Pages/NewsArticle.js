import React, { useState } from 'react'
import Construction from '../components/Construction';
import { useParams } from 'react-router-dom';
import { NavigationBar } from '../components/PageNavbar';
import { Container } from 'react-bootstrap';
function NewsArticle() {
    const {id} = useParams();
    console.log(id)
    const [news, setNews] = useState([
        {
          id :0,
          title:'News Title',
          date: '29/03/2023, 21:07 WIB',
          text: "This Section Under Development"
        },
        {
          id :1,
          title:'News Title',
          date: '31/03/2023, 21:07 WIB',
          text: "This Section Under Development"
        }
        ,
        {
          id :2,
          title:'News Title',
          date: '31/03/2023, 21:07 WIB',
          text: "This Section Under Development"
        },
        {
          id :3,
          title:'News Title',
          date: '31/03/2023, 21:07 WIB',
          text: "This Section Under Development"
        }
        ,
        {
          id :4,
          title:'News Title',
          date: '31/03/2023, 21:07 WIB',
          text: "This Section Under Development"
        }
        
        ])
    
    const article = news.find(article => article.id === parseInt(id));
    document.title = "Robotik UNP";
    return (
      <div>
        <NavigationBar/>
      <section className='m-lg--5 my-5'>
        <Container>
          <Construction/>
          <h3 className='text-center mt-3'>News ID : {article.id}</h3>
        </Container>
      </section>
    </div>
    )
}

export default NewsArticle