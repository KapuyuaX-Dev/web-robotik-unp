import React from "react"
import { Container } from "react-bootstrap"
import '../style/newsComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import {FacebookShareButton, FacebookIcon,LineShareButton,LineIcon,
    TelegramShareButton,TelegramIcon,WhatsappShareButton,WhatsappIcon,TwitterShareButton,TwitterIcon} from "react-share";
import Calendar from 'react-calendar';
import '../style/Calendar.css';
import { Link, useNavigate } from "react-router-dom"

function NewsBanner({imagePath}){
    return(
        <div className="newsBanner d-flex">
          <img className="mt-3" src={process.env.PUBLIC_URL+imagePath} alt="image"/>
        </div>
    )
}

function ShareButton({description,title,id}){
    return(
        <div className="d-flex flex-wrap mt-4 justify-content-end gap-2 align-items-center">
            <div className="fw-bold">SHARE :</div>
                        <FacebookShareButton 
                        url={'http://robotik.pkm.unp.ac.id/news/'+id}
                        quote={description}
                        ><FacebookIcon size={32} round /></FacebookShareButton>

                        <TwitterShareButton 
                        url={'http://robotik.pkm.unp.ac.id/news/'+id}
                        title={title}
                        ><TwitterIcon size={32} round /></TwitterShareButton>

                        <WhatsappShareButton
                        url={'http://robotik.pkm.unp.ac.id/news/'+id}
                        title={title}
                        ><WhatsappIcon size={32} round /></WhatsappShareButton>

                        <TelegramShareButton
                        url={'http://robotik.pkm.unp.ac.id/news/'+id}
                        title={title}
                        ><TelegramIcon size={32} round /></TelegramShareButton>

                        <LineShareButton
                        url={'http://robotik.pkm.unp.ac.id/news/'+id}
                        title={title}
                        ><LineIcon size={32} round /></LineShareButton>
                    </div>
    )
}

export function NewsContent({id,title,description,date,imagePath,article, news}){
    const displayedNews = news.slice(-5).reverse()
    const navigate = useNavigate()
    console.log(news.length-1)
    return(
        <div>
            <Container className="newsContent mt-5">
                <div className="LeftSide mb-4 ">
                    <h2 id="top">{title}</h2>
                    <div className="d-flex gap-2">
                        <FontAwesomeIcon icon={faClock} style={{color:'#808080'}}/>
                        <h6>{date}</h6>
                    </div>
                    <NewsBanner imagePath={imagePath}/>
                    <div className="news-article mt-3" dangerouslySetInnerHTML={ {__html:article}}/>
                    <div className="navigation d-flex justify-content-between mt-3">
                        <div className="next" onClick={(id+1>news.length-1)? '':()=>navigate(`/news/${id+1}`)}>
                            <div className="mx-3 mt-1 fs-6 fw-bold">Next</div>
                            <div className="navTitle mx-3">{(id+1>news.length-1)? '':news[id+1].title}</div>
                            
                        </div>
                        <div className="prev" onClick={(id-1<0)? '':()=>navigate(`/news/${id-1}`)}>
                            <div className="mx-3 mt-1 fs-6 fw-bold">Previous</div>
                            <div className="navTitle mx-3">{(id-1<0)? '':news[id-1].title}</div>
                        </div>
                    </div>
                    <ShareButton id={id} description={description} title={title}/>
                </div>
                <div className="RightSide mt-5">
                    <h5 className="mt-3">Recent Post</h5>
                    <div className="recent-post my-3">
                    {
                    displayedNews.map((news,i)=>(
                            <div key={i} className="d-flex flex-column mb-3">
                                <Link to={`/news/${news.id}`} style={{textDecoration:'none'}}>{news.title}</Link>
                                <div>{news.date}</div>
                            </div>
                    ))
                    }
                    </div>
                    <Calendar className='my-5'/>
                    
                </div>
            </Container>
        </div>
    )
}
    
function NewsCard({item}){
    return(
        <div className="newsCard b border d-flex justify-content-start align-items-center gap-3">
            <img src={process.env.PUBLIC_URL+item.image}></img>
            <div className="d-flex flex-column">
                <div className="title"><Link to={`/news/${item.id}`} style={{textDecoration:'none',color:'black'}}>{item.title}</Link></div>
                <div className="date text-muted">{item.date}</div>
                <div className="desc d-inline-block">{item.text}</div>
            </div>
        </div>
    )
}

export function NewsPageComponent({news}){
    const newsReversed = news.slice(0).reverse().map(element => {return element;});
    return(
        <div> 
            <Container className="mt-5 pt-3"> 
            <div className="head bg-primary">a</div>
            <Container className="newsContent">
                <div className="LeftSide mb-4">
                <div className="d-flex">
                <h5 className="mt-3">Recent Post</h5>
                </div>
                {
                    newsReversed.map((news,i)=>(
                        <NewsCard item={news}/>
                    ))
                }
                </div>
                <div className="RightSide mt-5">
                    <Calendar className='my-5'/>
                </div>
            </Container>
            </Container>
        </div>
    )
}