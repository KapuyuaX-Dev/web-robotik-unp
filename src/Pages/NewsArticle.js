import React, { useState } from 'react'
import Construction from '../components/Construction';
import { useParams } from 'react-router-dom';

function NewsArticle() {
    const {id} = useParams();
    console.log(id)
    const [news, setNews] = useState([
        {
          id :0,
          title:'News Title',
          date: '29/03/2023, 21:07 WIB',
          text: "Some quick example text to build on the card title and make up the bulk of the card's content"
        },
        {
          id :1,
          title:'News Title',
          date: '31/03/2023, 21:07 WIB',
          text: "Some quick example text to build on the card title and make up the bulk of the card's content"
        }
        ,
        {
          id :2,
          title:'News Title',
          date: '31/03/2023, 21:07 WIB',
          text: "Some quick example text to build on the card title and make up the bulk of the card's content"
        },
        {
          id :3,
          title:'News Title',
          date: '31/03/2023, 21:07 WIB',
          text: "Some quick example text to build on the card title and make up the bulk of the card's content"
        }
        ,
        {
          id :4,
          title:'News Title',
          date: '31/03/2023, 21:07 WIB',
          text: "Some quick example text to build on the card title and make up the bulk of the card's content"
        }
        
        ])
    
    const article = news.find(article => article.id === parseInt(id));
    document.title = "Robotik UNP";
    return (
      <div>
        <Construction/>
     </div>
    )
}

export default NewsArticle