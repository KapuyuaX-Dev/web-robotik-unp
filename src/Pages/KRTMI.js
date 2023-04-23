import React, { useEffect, useState } from 'react'
import Construction from '../components/Construction';
import { NavigationBar } from '../components/PageNavbar';
import { About, Intro } from '../components/TeamComponen';
import { Ring } from 'react-awesome-spinners';

function KRTMI() {
  const [about,setAbout] = useState({
    'team':"Artscitech",
    'logo':'/image/krtmi.png',
    'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel varius ipsum. In id libero nulla. Maecenas enim lacus, consectetur ac rutrum sit amet, venenatis nec leo. Nullam tincidunt tempor lectus eget rhoncus. Mauris semper dignissim nulla ut varius. Nulla facilisi. Nunc eget lacus dapibus, ornare orci sit amet, consectetur dui. Curabitur cursus ante enim. Integer vitae bibendum dui. Praesent in tincidunt arcu. Cras mollis vel velit id luctus. Donec malesuada sem sed neque tincidunt, ut commodo elit pulvinar. Cras libero ante, dignissim at gravida sed, imperdiet quis elit. Sed scelerisque arcu non neque rhoncus, vitae ornare metus consectetur. Duis.'
  })
  document.title = about.team;
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
        <Intro/>
      <section>
        <About team={about.team} logo={about.logo} description={about.description}/>
        <Construction/>
      </section>
    </div>
  )
}

export default KRTMI