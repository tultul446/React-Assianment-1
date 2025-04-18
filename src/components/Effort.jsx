import React from 'react'

function Effort() {
    const NumList = [
        {
            num: '32%',
            pera:'Improvement in Open Rates'
        },
        {
            num: '75%',
            pera:'Improvement in Ramp Time'
        },
        {
            num: '35%',
            pera:'Improvement in Meetings Booked'
        }
    ];

  return (
    
    <section className='h-screen bg-cover bg-center flex items-center grid lg:grid-cols-2 grid-row  p-5 ' style={{ backgroundImage:"url(src/assets/Img.png)"}}>
      
  <div className='lg:ml-36 md:ml-16 max-w-auto'>

    <div>
     <h1 className='text-[#FFFFFF] lg:w-[450px] lg:text-4xl md:text-3xl text-2xl sans'>Allocate effort where your reps make an inpact.</h1>
     <h2 className='mt-5 lg:text-3xl md:text-3xl text-2xl text-[#0FF1F6] sanserif'>Let us handle the rest.</h2>
     <p className='lg:text-lg md:text-sm text-sm text-[#f3e1f4] mt-5 lg:w-[500px] max-w-auto'>Keep your reps “in the air” -- out in the field and on the phone where they can build relationships.</p>
    </div>



   <div className='lg:mt-10 grid  lg:grid-cols-3 grid-row lg:space-x-6 lg:w-[600px]'>
    {NumList.map((item, i) => <div key={i} className='lg:mt-10 sm:mt-3 md:mt-5'>
       <h1 className='font-bold lg:text-4xl md:text-2xl text-[#0FF1F6] '>{item.num}</h1>
       <p className='lg:mt-5 lg:text-lg md:text-sm text-sm sm:font-sm text-[#E9EEF1]'>{item.pera}</p>
    </div>)}

   </div>

  </div>

  <div></div>

</section>

  )
}

export default Effort;
