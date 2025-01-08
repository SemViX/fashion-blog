'use client'
import Link from 'next/link'
import HeaderLinks from './HeaderLinks'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import DropDownHeader from './DropDownHeader'

const Header = () => {
  const [isOpen, setState] = useState(false)
  const setOpen = () => {
    setState((prev) => !prev)
  }
  return (
    <header className='flex justify-between px-5  md:px-20 items-center min-h-[100px]'>
        <Link href={"#"} className='relative font-serif text-2xl after:content-[""] after:bg-highlighted/50 after:p-1 after:absolute 
            after:left-0 after:right-0 after:-z-10 after:bottom-1'
        >
          FASHION
        </Link>
        <HeaderLinks className='hidden md:flex'/>
        {isOpen? 
          <X size={40} className='block md:hidden hover:text-highlighted z-50' onClick={setOpen}/>
          : 
          <Menu size={40} className='block md:hidden hover:text-highlighted z-50' onClick={setOpen}/>
        }
        <DropDownHeader state={isOpen} />
    </header>
  )
}

export default Header