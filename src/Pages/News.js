import React from 'react'
import Construction from '../components/Construction';
import { useNavigate } from 'react-router-dom';
function News() {
    document.title = "Robotik UNP";
    const navigate = useNavigate()
    return (
      <div>
        <Construction/>
        <div className='d-flex align-items-center justify-content-center' style={{cursor: "pointer", "font-size": "18px",color:"crimson"}} onClick={()=>navigate(-1)}>Go Back</div>
      </div>
    )
}

export default News