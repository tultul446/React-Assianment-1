import React from 'react'
import Image1 from '../assets/Group.png';
import Image2 from '../assets/ph_arrows-out-cardinal-duotone.png';
import Image3 from '../assets/ph_graph-duotone.png';




function ConSection() {

  const ControlList = [
{
  image:Image1,
  heading:`You’re in Control`,
  description:"aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work."
},
{
  image:Image2,
  heading:"Infinitely Scalable",
  description:"Train an aiDR on a patch. When you are happy with the results, scale it effortlessly."
},
{
  image:Image3,
  heading:"Incredibly Flexible",
  description:"Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time."
}

  ];  


  return (
    <section className='bg-[#002228] grid grid-cols-1 md:grid-cols-3 gap-5'>
      {ControlList.map((item, i)=> <div key={i}className='px-5 py-12 space-y-5'>
        
  <div className=' lg:ml-9'>
    <img className='w-12 h-12' src={item.image} alt="" />
  </div>

  <div>
    <h3 className='text-[#FFFFFF] text-bold text-xl lg:ml-9'>{item.heading}</h3>
    <p className='text-[#ADB2B1] text-sm mt-2 lg:w-64 lg:ml-9'>{item.description}</p>
  </div>





      </div>
      )

      }
    </section>
  )
}

export default ConSection;
