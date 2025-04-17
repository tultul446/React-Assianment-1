import React from 'react'
import CheckCircleIconOutline from '@mui/icons-material/CheckCircleOutline';

function EmailList() {
  
    
  return (
    <section className='h-screen bg-cover bg-center items-center text-center  lg:space-y-10 py-5  max-w-auto text-white max-w-auto' style={{ backgroundImage:"url(public/BG.png)"}}>
      
    <div className='md:mt-36 lg:mt-36 mt-16'>
     <h2 className='lg:text-4xl md:text-3xl text-2xl text[#FFFFFF] lg:mt-56 sm:mt-16'>Train your aiDR on your... </h2>
     <h3 className='mt-5 lg:text-3xl md:text-2xl  text-xl text-[#0FF1F6] lg:-ml-36 md:-ml-24'>Presm:fered email st|</h3>
    </div>

    <div>
       <p className='text-sm mt-5 lg:-ml-24' style={{wordSpacing:1, letterSpacing:1}}>You’re in control. Train your aiDR on<br/> elements of your Marketing strategy.</p>
    </div>
     
     <div className=' items-center justify-center space-x-1 space-y-5  lg:ml-[35.5rem] md:ml-[13.5rem] ml-5 md:mt-5 mt-5 text-[#14BCB2]'>

    

    <div className=' xl:flex lg:flex lg:gap-10  md:mt-5'> 

        <div className='flex gap-3'>
      <CheckCircleIconOutline className='text-[#14BCB2]'></CheckCircleIconOutline>
      <p>Quick to ramp</p>
      </div>
        
     <div className='flex gap-3'>
      <CheckCircleIconOutline className='text-[#14BCB2]'></CheckCircleIconOutline>
      <p>Easy to optimize</p>
      </div>
</div>


<div className='xl:flex lg:flex lg:gap-5 md:mt-2 '>
    
<div className='flex gap-3'>
      <CheckCircleIconOutline className='text-[#14BCB2]'></CheckCircleIconOutline>
      <p>Quick to scale up</p>
      </div>


      <div className='flex gap-3'>
      <CheckCircleIconOutline className='text-[#14BCB2]'></CheckCircleIconOutline>
      <p>Works with all your existing tools</p>
     </div>
</div>


     </div>


     


    </section>
  )
}

export default EmailList;
