import React from 'react'
import GalleryItem from './GalleryItem'
import { galleryProps } from '@/types/gallery'

const Gallery = ({photos}:galleryProps) => {
  return (
    <section className='max-w-[770px] w-full grid grid-cols-1 sm:grid-cols-2 gap-4'>
        {
            photos.map((item, index) => (
                <GalleryItem
                    key={index}
                    title={item.title}
                    type={item.type}
                    image={item.image}
                    date={item.date}
                    author={item.author}
                />
            ))
        }
    </section>
  )
}

export default Gallery