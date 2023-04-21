import React from 'react'
import Construction from '../components/Construction';
import { NavigationBar } from '../components/PageNavbar';
function News() {
    document.title = "Robotik UNP";
    return (
      <div>
        <NavigationBar/>
      <section className='m-5'>
        <Construction/>
      </section>
    </div>
    )
}

export default News