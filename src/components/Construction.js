import React from 'react'
import vids from "../assets/image/gallery/underConstruction.gif"
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
function Construction() {
  const navigate = useNavigate()
  return (
    <div className='text-center'> 
        <img src={vids} type="img/gif" alt='underconstruction'></img>
        <h3>UNDER CONSTRUCTION</h3>
        <Container className='d-flex align-items-center justify-content-center'>
          <div style={{cursor: "pointer", "font-size": "18px",color:"crimson",background:"#14213d", width:"80px", "border-radius":"5px",color:"whitesmoke"}} onClick={()=>navigate(-1)}>Go Back</div>
        </Container>
    </div>
  )
}

export default Construction