import React from 'react'
import Minibar from '../../components/Navbar/Minibar'
import Navbar2 from '../../components/Navbar/Navbar2'
import Menproduct from './Menproduct'
import Footerpage from '../../components/Footer/Footerpage'

function Menpage() {
  return (
    <div className='w-full min-h-screen'>
        <Minibar />
        <Navbar2 />
        <Menproduct />
        <Footerpage />
    </div>
  )
}

export default Menpage