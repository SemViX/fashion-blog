import React from 'react'
import Container from './Container'

const HeroSection = () => {
  return (
    <section className='bg-[url(/hero-image.jpg)] w-screen min-h-[550px] bg-no-repeat bg-cover bg-center overflow-hidden flex flex-col justify-end'>
        <Container className='mb-[40px]'>
            <p className='text-white uppercase font-thin'>Vehicle</p>
            <h1 className='text-white text-3xl font-semibold font-serif'>
            One of Saturn’s largest rings <br /> may be newer than anyone
            </h1>
            <p className='text-white font-normal'>June 6, 2019 &nbsp; By Rickie Baroch &nbsp; 4 comments</p>
        </Container>
    </section>
  )
}

export default HeroSection