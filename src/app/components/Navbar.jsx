import Link from 'next/link'
import React from 'react'


function Navbar() {
  return (
    <div className='py-2 flex flex-wrap items-center justify-between mx-auto px-4 sm:px-5  fixed top-0 left-0 right-0'>
        <div className='text-base tracking-wide border-b-2 border-[#bc6c25]'>
            <Link href="/">vardhman.dev</Link>
        </div>
        <ul className='justify-end p-0 text-sm sm:text-xs ml-auto '>
            <li className='inline ml-3 hover:border-b-2 hover:border-[#bc6c25]'><Link href="#">About</Link></li>
            <li className='inline ml-3 hover:border-b-2 hover:border-[#bc6c25]'><Link href="https://vardhman.hashnode.dev">Blog</Link></li>
            <li className='inline ml-3 hover:border-b-2 hover:border-[#bc6c25]'><Link href="#projects">Projects</Link></li>
        </ul>
    </div>
  )
}

export default Navbar