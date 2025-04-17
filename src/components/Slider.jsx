import React, { useState } from 'react'
import Image5 from '../assets/Group 9.png'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const testimonials = [
    {
        icon:Image5,
        pera:"Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
        name:'John Doe',
        company:'Chief Strategy Officer @ Company'
    },
    {
        icon:Image5,
        pera:`Wizia lets you train, activate, and optimize aiDRs. 
Take your outbound to new levels of performance and efficiency.`,
        name:'JOHN Doe',
        company:'Chief Strategy Officer @ Company'
    },
    {
        icon:Image5,
        pera:" Consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
        name:'John Doe',
        company:'Chief Strategy Officer @ Company'
    },
];






function Slider() {

    const[current, setCurrent] = useState(0);

    const handleNext = () => {
    setCurrent((prev) => (prev + 1 ) % testimonials.length );
    }
 
 const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
};

  return (
    <section className='max-w-auto  mx-auto p-10 sm:p-6 text-center bg-[#002228] relative'>



      <div className='mb-6 transition-all duration-300 ease-in-out '>

      <img src={Image5} alt="" className='mx-auto'/>
       <p className='text-base sm:text-lg md:text-xl sans text-[#FFFFFF] lg:w-[720px] lg:ml-[25.5rem] mt-5'>{testimonials[current].pera}</p>

 <p className='mt-6 font-semibold text-base text-lg text-[#90DDAF]'>{testimonials[current].name}</p>


<p className='text-sm mt-2 text-[#96ACAF]'>{testimonials[current].company}</p>

     


<button className='absolute left-2 sm:left-4 top-1/2 transform-translate-y-1/2 text-lg text-[#90DDAF]  hover:text-white lg:outline lg:ml-10' onClick={handlePrev} >{< ArrowBackIcon />}</button>

<button className='absolute right-2 sm:right-4 top-1/2 transform-translate-y-1/2 text-lg text-[#90DDAF]  hover:text-white  lg:outline lg:mr-10 sm:mt-16' onClick={handleNext}> { < ArrowForwardIcon /> }
</button>


<div className='flex justify-center mt-5 space-x-2'>
{testimonials.map((item, i) => (
    <div key={i} className={`h-2 w-2 rounded-full transition-all duration-200 ${
        current === i ? "bg-blue-700" : "bg-white"
    }`} >

    </div>
))}
</div>
</div>
    </section>
  )
}

export default Slider
