'use client'
import { usePagination } from '@/hooks/usePagination'
import { ChevronLeftIcon, ChevronRight } from 'lucide-react'

const Pagination = () => {
    const {setCurrentPage, setNextPage, setPrevPage, pageNumber, currentPage} = usePagination()
  return (
    <div className='mx-auto w-fit p-2 border-2 border-[#E5E5E5] mt-14 flex items-center justify-between gap-3'>
        <div 
            className='flex items-center gap uppercase text-third-text font-base hover:text-highlighted transition-colors duration-200 cursor-pointer'
            onClick={setPrevPage}    
        >
            <ChevronLeftIcon size={30}/>
            <p className='hidden sm:block'>older post</p>
        </div>
        <ul className='flex gap-4'>
            {currentPage > 2 && <p className='hidden sm:block text-main-text font-semibold text-lg'>...</p>}
            {pageNumber.map((page, index) => (
                Math.abs(currentPage - (index + 1)) <= 2 &&
                <li 
                    key={index} 
                    onClick={() => setCurrentPage(index + 1)}
                    className={`${currentPage === index+1? 'text-highlighted':'text-main-text'} text-lg font-medium cursor-pointer hover:text-secondary-text`}
                >
                    {page}
                </li>
            ))}
            {pageNumber.length - currentPage > 2 && <p className='hidden sm:block text-main-text font-semibold text-lg'>...</p>}
        </ul>
        <div 
            className='flex items-center gap uppercase text-third-text font-base hover:text-highlighted transition-colors duration-200 cursor-pointer'
            onClick={setNextPage}    
        >
            <p className='hidden sm:block'>next post</p>
            <ChevronRight size={30}/>
        </div>
    </div>
  )
}

export default Pagination