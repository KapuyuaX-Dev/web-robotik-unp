import React, { useContext, useEffect, useState } from 'react'
import Construction from '../components/Construction';
import { useParams } from 'react-router-dom';
import { NavigationBar } from '../components/PageNavbar';
import { Container } from 'react-bootstrap';
import { Ring } from 'react-awesome-spinners';
import { NewsContext } from '../Context';

function NewsArticle() {
    const {id} = useParams();
    console.log(id)
    const {news, setNews} = useContext(NewsContext)
    const article = news.find(article => article.id === parseInt(id));
    document.title = "Robotik UNP";
    
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const timer = setTimeout(() => {
      setLoading(false);
      }, 200);
      return () => clearTimeout(timer);
    }, []);

    if(loading){
      return(
          <div className='d-flex flex-column align-items-center justify-content-center my-5'>
            <Ring/>
            <h3>Loading</h3>
          </div>
      )
    }
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