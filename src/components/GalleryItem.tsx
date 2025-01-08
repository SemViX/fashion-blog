'use client'
import { galleryItemProps } from '@/types/galleryItem'
import {motion} from 'motion/react'
import Image from 'next/image'
const GalleryItem = ({ image, author, title, type, date}:galleryItemProps) => {
  return (
    <motion.div
        className='flex flex-col items-center gap-2 pb-3 border-b-2 border-third-text/80'
        initial={{y:-10, x:-10, opacity:0}}
        whileInView={{y:0, x:0, opacity:1}}
        viewport={{once:false}}
        transition={{delay:0.2, ease:'easeInOut', duration:0.4}}

    >
        <Image src={image} width={370} height={280} alt=''/>
        <p className='text-highlighted uppercase text-base font-light'>
            {type}
        </p>
        <h2 className='text-lg mx-2 font-semibold text-center text-main-text font-serif'>
            {title}
        </h2>
        <p className='text-secondary-text'>
            {date} &nbsp; {author}
        </p>
    </motion.div>
  )
}

export default GalleryItem