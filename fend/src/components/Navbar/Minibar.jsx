import React from 'react'

function Minibar() {
  return (
    <div className='w-full h-auto bg-black'>
        <div className='w-full flex justify-center content-center text-wrap'>
            <h1 className='text-white xl:text-[17px] font-bold sm:text-[13px] text-balance hidden sm:block'>Special! Buy today and receive an immediate 10% discount when purchasing 500.- or more. Free shipping!!</h1>
        </div>
        <div className='flex justify-center content-center p-1 text-wrap'>
          <h1 className='text-white font-bold text-[12px]  sm:hidden'>Special! Buy today immediate 10% discount when purchasing 500.</h1>
        </div>
    </div>
    
  )
}

export default Minibar