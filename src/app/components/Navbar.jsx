import Link from 'next/link'
import React from 'react'


function Navbar() {
  return (
    <div className=' py-2 flex flex-wrap items-center justify-between mx-auto px-4 bg-[#BC6C25] text-white fixed top-0 left-0 right-0'>
        <div className='text-lg font-semibold tracking-wide'>
            Vardhman
        </div>
        <ul className='justify-end p-0 text-xs ml-auto'>
            <li className='inline ml-3 hover:border-b-2'><Link href="#">About</Link></li>
            <li className='inline ml-3 hover:border-b-2'><Link href="#">Blog</Link></li>
            <li className='inline ml-3 hover:border-b-2'><Link href="#projects">Projects</Link></li>
        </ul>
    </div>
  )
}

export default Navbar