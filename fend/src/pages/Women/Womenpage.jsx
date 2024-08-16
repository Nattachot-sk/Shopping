import React from 'react'
import Minibar from '../../components/Navbar/Minibar'
import Navbar2 from '../../components/Navbar/Navbar2'
import Footerpage from '../../components/Footer/Footerpage'
import Womenproduct from './Womenproduct'

function Womenpage() {
  return (
    <div className='w-full min-h-screen'>
          <Minibar />
          <Navbar2 />
          <Womenproduct />
          <Footerpage />
    </div>
  )
}

export default Womenpage