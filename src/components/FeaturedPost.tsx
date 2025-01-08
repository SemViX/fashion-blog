import { FEATURED_POST } from '@/utils/constants/featuredPosts'
import React from 'react'
import GalleryItem from './GalleryItem'

const FeaturedPost = () => {
  return (
    <>
        <div className='p-3 border-2 border-third-text text-main-text w-full text-center mb-5 font-serif font-normal'>
            Featured post
        </div>
        <div className='flex flex-col gap-3'>
            {FEATURED_POST.map((post, index) => (
                <GalleryItem 
                    key={index}
                    image={post.image} 
                    title={post.title} 
                    type={post.type}
                    date={post.date} 
                    author={post.author} 
                />
            ))}
        </div>
    </>
  )
}

export default FeaturedPost