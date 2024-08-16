import React, { useState } from 'react'
import Minibar from '../../components/Navbar/Minibar'
import Navbar2 from '../../components/Navbar/Navbar2'
import Hero from '../../components/Hero/Hero'

import Slidehero from '../../components/Hero/Slidehero'
import Shopnew from '../../components/Hero/Shopnew'
import Bestseller from '../../components/Hero/Bestseller'
import Footerpage from '../../components/Footer/Footerpage'
import { useAuth } from '../../auth/AuthContext'



function Mainpage() {



  return (
    <div className='w-full min-h-screen bg-white'>
        <Minibar />
        <Navbar2 />
        <Slidehero />
        <Shopnew />
        <Bestseller />
        <Footerpage />
    </div>
  )
}

export default Mainpage