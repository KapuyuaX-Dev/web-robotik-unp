import React from "react"
import { Container } from "react-bootstrap"
import '../style/newsComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import {FacebookShareButton, FacebookIcon,LineShareButton,LineIcon,
    LinkedinShareButton,LinkedinIcon,TelegramShareButton,TelegramIcon,WhatsappShareButton,WhatsappIcon,TwitterShareButton,TwitterIcon} from "react-share";
import Calendar from 'react-calendar';
import '../style/Calendar.css';
import { Link } from "react-router-dom"

    function NewsBanner({imagePath}){
    return(
        <div className="d-flex">
          <img className="mt-3" src={process.env.PUBLIC_URL+imagePath} alt="image"/>
        </div>
    )
}

function ShareButton({description,title,id}){
    return(
        <div className="d-flex mt-4 justify-content-end gap-2">
                        <FacebookShareButton 
                        url={'http://robotik.pkm.unp.ac.id/news/'+id}
                        quote={description}
                        ><FacebookIcon size={32} round /></FacebookShareButton>

                        <TwitterShareButton 
                        url={'http://robotik.pkm.unp.ac.id/news/'+id}
                        title={title}
                        ><TwitterIcon size={32} round /></TwitterShareButton>

                        <LinkedinShareButton
                        url={'http://robotik.pkm.unp.ac.id/news/'+id}
                        title={title}
                        summary={description}
                        ><LinkedinIcon size={32} round /></LinkedinShareButton>

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
    return(
        <div>
            <Container className="newsContent mt-5">
                <div className="LeftSide mb-4">
                    <h2>{title}</h2>
                    <div className="d-flex gap-2">
                        <FontAwesomeIcon icon={faClock} style={{color:'#808080'}}/>
                        <h6>{date}</h6>
                    </div>
                    <NewsBanner imagePath={imagePath}/>
                    <div className="news-article mt-3" dangerouslySetInnerHTML={ {__html:article}}/>
                    <ShareButton id={id} description={description} title={title}/>
                </div>
                <div className="RightSide mt-5">
                    <h5 className="mt-3" style={{fontSize:'24px'}}>Recent Post</h5>
                    <div className="recent-post my-3">
                    {
                    news.map((news,i)=>(
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