import { INSTAGRAM_PHOTO } from '@/utils/constants/galleries'
import Image from 'next/image'
import React from 'react'

const InstagramSection = () => {
  return (
    <section className='p-2'>
        <h2 className='font-serif text-main-text font-semibold text-center mt-20 mb-5'>Follow our @instagram_name</h2>
        <div className='flex gap-2 flex-wrap items-center justify-around'>
            {
                INSTAGRAM_PHOTO.map((photo, index) => (
                    <Image
                        key={index}
                        src={photo}
                        height={230}
                        width={230}
                        alt=''
                    />
                ))
            }
        </div>
    </section>
  )
}

export default InstagramSection