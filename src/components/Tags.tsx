import { TAGS } from '@/utils/constants/tags'
import React from 'react'

const Tags = () => {
  return (
    <>
        <div className='p-3 border-2 border-third-text text-main-text w-full text-center mb-5 font-serif font-normal'>
            Tags
        </div>
        <div className='flex gap-3 flex-wrap items-center justify-center'>
            {TAGS.map((tag, index) => (
                <span className='p-1 bg-third-text rounded-xl' key={index}>{tag}</span>
            ))}
        </div>
    </>
  )
}

export default Tags