import React from 'react'
import Minibar from '../../components/Navbar/Minibar'
import Navbar2 from '../../components/Navbar/Navbar2'

import Footerpage from '../../components/Footer/Footerpage'
import Map from './Map'
import DataLocation from './DataLocation'

function Locationpage() {
  return (
    <div className='w-full min-h-screen'>
        <Minibar />
        <Navbar2 />
        <DataLocation />
        <Footerpage />
    </div>
  )
}

export default Locationpage