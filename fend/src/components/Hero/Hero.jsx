import React from 'react'
import Slidehero from './Slidehero'
import Shopnew from './Shopnew'
import Bestseller from './Bestseller'

function Hero() {
  return (
    <div className='w-full h-[400px] bg-gray-800'>
            <Slidehero />
            <div className='w-full h-10 bg-white'></div>
            <Shopnew />
            <div className='w-full h-10 bg-white'></div>
            <Bestseller />
            <div className='w-full h-10 bg-white'></div>
    </div>
  )
}

export default Hero