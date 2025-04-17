import React from 'react'
import { Typography } from '@mui/material'
import Logo from './Logo'
function Footer() {
  return (
    <section className='lg:flex bg-[#07292F]  lg:space-x-[960px]  lg:py-10 md:py-6 py-3 px-5 max-w-auto max-h-auto'>
         <Typography variant='h6' sx={{marginLeft:12,}}>
         <Logo />
      </Typography>
      
     <div>
     <p className='text-sm p-5 text-[#96ACAF] '>Copyright © 2023 Wizia. All rights reserved.</p>
     </div>
    </section>
  )
}

export default Footer
