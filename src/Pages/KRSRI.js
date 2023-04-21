import React from 'react'
import Construction from '../components/Construction'
import { NavigationBar } from '../components/PageNavbar';

function KRSRI() {
    document.title = "KRSRI UNP";
    return (
      <div>
        <NavigationBar/>
      <section className='m-5'>
        <Construction/>
      </section>
    </div>
    )
}

export default KRSRI