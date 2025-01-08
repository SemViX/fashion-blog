import { CATEGORIES } from '@/utils/constants/categories'
import React from 'react'

const Categories = () => {
  return (
    <>
        <div className='p-3 border-2 border-third-text text-main-text w-full text-center mb-5 font-serif font-normal'>
            Categories
        </div>
        <div className='flex flex-col gap-5'>
            {CATEGORIES.map((category, index) => (
                <div className='flex w-full justify-between text-secondary-text border-b-2 border-third-text/80' key={index}>
                    <span>{category.category}</span> 
                    <span>({category.numbers})</span>
                </div>
            ))}
        </div>
    </>
  )
}

export default Categories