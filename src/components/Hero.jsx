import React from 'react'
import { Button } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
function Hero() {
  return (
    <section className='h-screen bg-cover bg-center flex items-center grid lg:grid-cols-2 md:grid-cols-2 sm:grid-row  mt-10 lg:space-y-10 p-5 ' style={{ backgroundImage:"url(public/Img.png)"}} >
      
  <div className='text-white ml-10 max-w-auto mt-2 lg:ml-64'>

    <div className='text-[#0FF1F6] md:text-xl lg:text-3xl sm:text-xl'>
      <h3 className=''>AI SDRs aiDRs</h3></div>

    <div className='mt-3 lg:text-5xl md:text-3xl sm:text-3xl text-4xl md:p-1 '><h1>More leads,
      <br/> less people.</h1></div>

    <div className='mt-3 p-2'>
      <p className='text-[#acbaba] text-sm'>Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized sequences to every target contact.</p></div>


      <div className='mt-3 lg:p-3 md:p-1 text-sm'>
    <Button variant='contained'  endIcon={<ArrowOutwardIcon/> }>Sign Up for the Beta </Button>
    </div>

  </div>


  <div></div>


    </section>
  )
}

export default Hero
