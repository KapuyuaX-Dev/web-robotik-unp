import React, { useState } from 'react'
import { Col, Container, Figure, Row } from 'react-bootstrap'
import OwlCarousel, {Options} from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../style/Gallery.css'
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

function Lightbox({ imageUrl, onClose }) {
  return (
    <div className="lightbox-container" onClick={onClose}>
      <div className="lightbox-content">
        <img src={imageUrl} alt="" />
        <button className="lightbox-close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}


function Galery() {
  const [imageFile, setImageFile] = useState([
    '001.JPG','002.JPG','003.JPG','004.JPG','005.JPG','006.JPG','007.JPG','008.JPG','009.JPG','010.JPG'
  ])

  useEffect(()=>{
    Aos.init({duration:2000});
},[])

  const [selectedImage, setSelectedImage] = useState(null);

  function handleImageClick(event) {
    const imageUrl = event.target.src;
    setSelectedImage(imageUrl);
    
  }

  return (
    <div id='galery' className="gallery">
        <Container data-aos="fade-up">
          <h2>GALLERY</h2>
          <div className='d-flex justify-content-space-evenly'>
          <OwlCarousel className='owl-theme mt-5'
          loop   
          margin={10} 
          center={true}
          responsive={
            {
              0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
            }
          }
          autoplay={true} 
          autoplayTimeout={2000}
          autoplayHoverPause={true}
          >
            {
              imageFile.map((image,i)=>(
                  <img data-aos="fade-up" key={i} src={process.env.PUBLIC_URL+'/image/gallery/'+image} onClick={handleImageClick}/>
              ))
            }
          </OwlCarousel>
          </div>
        </Container>
        {selectedImage && (
            <Lightbox imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />
           )}
        <br></br>
    </div>
  )
}

export default Galery