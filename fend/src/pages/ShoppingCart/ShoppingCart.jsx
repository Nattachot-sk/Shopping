import React from 'react'
import Minibar from '../../components/Navbar/Minibar'
import Navbar2 from '../../components/Navbar/Navbar2'

import Footerpage from '../../components/Footer/Footerpage'
import Cart from '../../components/Cart/Cart'
function ShoppingCart() {
  return (
    <div className='w-full min-h-screen'>
        <Minibar />
        <Navbar2 />
        <Cart />
        <Footerpage />
    </div>
  )
}

export default ShoppingCart