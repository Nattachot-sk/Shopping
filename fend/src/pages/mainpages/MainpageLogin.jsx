import React, { Children, useState ,useEffect} from 'react'
import { useLocation , useNavigate} from "react-router-dom";
import Minibar from '../../components/Navbar/Minibar'
import Navbar2 from '../../components/Navbar/Navbar2'
import Hero from '../../components/Hero/Hero'

import Slidehero from '../../components/Hero/Slidehero'
import Shopnew from '../../components/Hero/Shopnew'
import Bestseller from '../../components/Hero/Bestseller'
import Footerpage from '../../components/Footer/Footerpage'
import { useAuth } from '../../auth/AuthContext'



function MainpageLogin() {
    const location = useLocation();
    const navigate = useNavigate();
    const userData = location.state;



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

export default MainpageLogin