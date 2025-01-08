'use client'
import React from 'react'
import {motion} from 'motion/react'
import Image from 'next/image'

const BigPhoto = () => {
  return (
    <motion.section
        className='pb-4 border-b-2 border-third-text max-w-[770px]'
        initial={{opacity:0, y:-10}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:false}}
        transition={{delay:0.2, duration:0.4, ease:'easeInOut'}}
    >
        <Image src={'/big_photo.jpg'} alt='' width={770} height={350}/>
        <div className='mt-2 px-5 flex flex-col gap-3'>
            <p className='text-base text-highlighted font-light uppercase'>
                summer
            </p>
            <h2 className='text-main-text font-semibold text-lg'>
                One of Saturn’s largest rings may be newer than anyone
            </h2>
            <p className='text-secondary-text'>
                June 6, 2019  &nbsp; By Rickie Baroch &nbsp; 6 comments
            </p>
            <p className='text-secondary-text'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, <br /> 
                totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque <br /> 
                laudantium, totam rem
            </p>
        </div>
    </motion.section>
  )
}

export default BigPhoto