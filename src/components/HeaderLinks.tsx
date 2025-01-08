'use client'
import { headerLinksProps } from '@/types/headerLinks'
import { HEADER_LINKS } from '@/utils/constants/headerLinks'
import Link from 'next/link'
import React, { useState } from 'react'

const HeaderLinks = ({className}:headerLinksProps) => {
    const [currenPath, setCurrentPath] = useState(1)
  return (
    <ul className={`flex gap-8 ${className}`}>
          {HEADER_LINKS.map((link) => (
            <li onClick={() => setCurrentPath(link.id)} key={link.id} className={`font-serif text-main-text text-lg font-medium hover:text-secondary-text ${link.id === currenPath && 'text-highlighted'}`}>
              <Link href={link.link}>{link.title}</Link>
            </li>
          ))}
        </ul>
  )
}

export default HeaderLinks