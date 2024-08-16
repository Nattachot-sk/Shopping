import React from 'react'
import Minibar from '../../components/Navbar/Minibar'
import Navbar2 from '../../components/Navbar/Navbar2'

import Footerpage from '../../components/Footer/Footerpage'
import Contact from '../../components/Contact/Contact'

function Contactpage() {
  return (
    <div className='w-full min-h-screen'>
        <Minibar />
        <Navbar2 />
        <Contact />
        <Footerpage />
    </div>
  )
}

export default Contactpage