import React from 'react'
import Construction from '../components/Construction';
import { NavigationBar } from '../components/PageNavbar';

function Galery() {
    document.title = "Gallery";
  return (
    <div>
        <NavigationBar/>
      <section className='m-5'>
        <Construction/>
      </section>
    </div>
  )
}

export default Galery