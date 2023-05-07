import Image from 'next/image'
import React from 'react'
import book from '../public/assets/projects/INIA440.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'


const page404 = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2' >
          <h2 className='py-2'>PAGE 404!! No encontrado</h2>
          <h3>Seguimos trabajando</h3>
        </div>
      </div>
    </div>
  )
}

export default page404