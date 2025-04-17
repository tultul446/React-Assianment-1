import React from 'react'
import { Button } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';


function GetStart() {
  return (
    <section className='text-center alignItems-center  max-w-auto bg-[#002228] h-auto mx-auto -mt-3 lg:py-16 md:py-10 py-5'>
      <div>

     
      <div className=' lg:p-3 md:p-1 text-sm mb-5 py-10'>
   
    <Button   variant='text' >GET STARTED</Button>
    </div>


       <h1 className='lg:text-4xl md:text-3xl text-xl text-white max-w-auto'>Embrace the new era of outbound.</h1>
       <p className='mt-5 lg:text-lg md:text-sm text-sm  text-gray-400 max-w-auto'>Wizia lets you train, activate, and optimize aiDRs. <br/>
       Take your outbound to new levels of performance and efficiency.</p>

      </div>
    
      <div className='mt-5 lg:mt-16 lg:p-3 md:p-1 text-sm mb-5'>
    <Button variant='contained'  endIcon={<ArrowOutwardIcon sx={{outline:1}}/> } sx={{ borderRadius:50,}}>Sign Up for the Beta </Button>
    </div>
      
    </section>
  )
}

export default GetStart
