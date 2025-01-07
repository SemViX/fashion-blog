import Link from 'next/link'
import HeaderLinks from './HeaderLinks'

const Header = () => {
  return (
    <header className='flex justify-between px-20 items-center min-h-[100px]'>
        <Link href={"#"} className='relative font-serif text-2xl after:content-[""] after:bg-highlighted/50 after:p-1 after:absolute 
            after:left-0 after:right-0 after:-z-10 after:bottom-1'
        >
          FASHION
        </Link>
        <HeaderLinks/>
    </header>
  )
}

export default Header