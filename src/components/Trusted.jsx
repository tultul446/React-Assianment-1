import React from 'react'

function Trusted() {
  return (
    <section className='bg-[#07292F] text-center alignItems-center justify-center lg:px-10 max-w-auto lg:h-[190px] md:h-[300px] h-[290px] m-[0px] -mt-3 lg:py-10 py-5'>
    

  <div className='p-2'>
     <p className='text-[#0FF1F6] text-sm '>our trusted partners</p>
     </div>
    
      <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 sm:grid-row animate-bounce  lg:ml-56 md:ml-34 ml-5 lg:gap-9 md:gap-5 sm:gap-2 px-10 mt-5'>
      

      <img className='w-18 ' src="public/BackHub logo.png" alt="" />
      <img className='w-18 ' src="public/CableLabs logo.png" alt="" />
      <img className='w-18 ' src="public/DBS logo.png" alt="" />
      <img className='w-18 ' src="public/EasyEuro logo.png" alt="" />
      <img className='w-18 ' src="public/AMD logo.png" alt="" />
      </div>

    </section>
  )
}

export default Trusted;
