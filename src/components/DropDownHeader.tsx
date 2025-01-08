import { DropDownHeaderProps } from '@/types/dropDownHeader'
import { HEADER_LINKS } from '@/utils/constants/headerLinks'
import {motion} from 'motion/react'

const DropDownHeader = ({state}:DropDownHeaderProps) => {
    const navAnimationVariants = {
        open:{
            width: 300,
            opacity: 1,
            transition: {delay:0.1, ease:'easeInOut', duration:0.3}
        },
        close:{
            width: 0,
            opacity: 0,
            transition: {delay:0.5, ease:'easeInOut', duration:0.3}
        }
    }
  return (
    <motion.nav
        animate={state? 'open' : 'close'}
        variants={navAnimationVariants}
        className={`absolute right-0 top-0 bottom-0 bg-white shadow-lg shadow-black/80 z-30 
            flex items-center justify-center md:hidden overflow-hidden`}
    >
        <ul className='mr-5 flex flex-col gap-16 text-center'>
            {HEADER_LINKS.map(link => (
                <motion.li
                    key={link.id}
                    className='font-bold text-3xl border-b-2 border-third-text/80 pb-3 cursor-pointer'
                    animate={state? 'open':"close"}
                    variants={{
                        open:{
                            opacity: 1,
                            x:0,
                            transition: {delay: 0.4 + (link.id/10), ease:'easeInOut', duration:0.4}
                        },
                        close:{
                            x: 100,
                            opacity:0,
                            transition: {delay: 0 + (link.id/10), ease:'easeInOut', duration:0.4}

                        }
                    }}
                >
                    {link.title}
                </motion.li>
            ))}
        </ul>
    </motion.nav>
  )
}

export default DropDownHeader