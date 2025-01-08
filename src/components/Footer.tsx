import React from 'react'
import HeaderLinks from './HeaderLinks'
import { SOCIALS } from '@/utils/constants/socials'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
        <div className='w-fit mx-auto relative my-[100px]'>
            <h1 className='uppercase font-serif text-3xl text-main-text'>
                fashion
            </h1>
            <div className='p-1 bg-highlighted/50 absolute left-0 right-0 bottom-1 -z-50' />
        </div>
        <HeaderLinks className='w-fit mx-auto flex-wrap items-center justify-around'/>
        <div className='mt-5 flex gap-4 w-fit mx-auto flex-wrap justify-center items-center'>
            {
                SOCIALS.map((social) => (
                    <Link key={social.id} href={social.link} className='border-2 border-third-text p-3 rounded-full hover:bg-highlighted hover:text-white'>
                        <social.icon/>
                    </Link>
                ))
            }
        </div>
        <div className='max-w-[1200px] w-full border-2 border-third-text/80 my-5 mx-auto px-5'/>
        <p className='text-center text-third-text font-medium mb-1'>@2019 Logwork. All Right Reserved.</p>
    </footer>
  )
}

export default Footer