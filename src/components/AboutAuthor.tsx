import Image from 'next/image'
import React from 'react'

const AboutAuthor = () => {
  return (
    <div className='max-w-[270px]'>
        <div className='p-3 border-2 border-third-text text-main-text w-full text-center mb-5 font-serif font-normal'>
            About the author
        </div>
        <Image src={'/author_photo.png'} width={270} height={180} alt=''/>
        <h3 className='text-xl text-main-text font-medium text-center mt-2'>Kate Willems</h3>
        <p className='text-third-text font-serif italic text-center'>Food & cooking bloger</p>
        <p className='line-clamp-3 text-secondary-text text-center'>
            Hi, I`m Sonia. Cooking is the way I express my creative side to the world. Welcome to my Kitchen Corner on…
        </p>
        <button className='w-full border-2 border-third-text text-highlighted mt-4 uppercase p-3 font-serif hover:border-secondary-text transition-colors duration-200'>
            continue reading
        </button>
    </div>
  )
}

export default AboutAuthor