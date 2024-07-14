"use client"
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

import { TypeAnimation } from 'react-type-animation'

function Header() {
  return (
    <div className='grid grid-cols-12 mt-16 py-10 text-[#BC6C25]'>
        <div className='hero col-span-12 sm:col-span-6 flex flex-col text-center sm:text-left'>
            <h1 className='text-4xl font-bold '>
                Hi, I&apos;m <br></br> 
                <TypeAnimation
                    sequence={[
                      'Vardhman',
                      1000, // wait 1s before replacing "Mice" with "Hamsters"
                      'Web Developer',
                      1000,
                      'Backend Developer',
                      1000,
                      'Computer Engineer',
                      1000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
            </h1>
            <p className='text-sm text-black mt-4'>Computer Science Engineer with a zest for problem-solving</p>
            <div className='flex flex-col sm:flex-row '>
              <button className='px-4 text-xs text-black mt-6 py-2 rounded-full bg-gradient-to-br from-[#bc6c25] via-[#dda15e] via-[#fefae0] to-[#bc6c25]'><Link target="_blank" href="https://drive.google.com/file/d/1cXz6D6yUR6KBi94ihznpwSFADlyaX2Ti/view?usp=drive_link">Download CV</Link></button>
              <button className='px-4 text-xs text-black mt-6 py-2 rounded-full border-solid border-[1px] border-[#bc6c25] ml-2'><Link href="#projects">Projects</Link></button>
            </div>
        </div>
        <div className=' mt-9 sm:mt-0 col-span-12 md:col-span-6  flex md:justify-end justify-center'>
            <div className='rounded-full bg-[#FEFAE0] h-52 w-52'>
                <Image src="/images/image.png" width={208} height={208} className='rounded-full'/>
            </div>
        </div>
    </div>
  )
}

export default Header