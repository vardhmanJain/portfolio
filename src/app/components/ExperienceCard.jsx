import Image from 'next/image'
import React from 'react'

function ExperienceCard({data}) {
  return (
    <div className='py-7 tracking-normal text-sm  flex flex-col items-center'>
        <Image src={data.logo} width={30} height={30} />
        <div className='text-lg'>{data.company}</div>
        <div >{data.position}</div>
        <div className='text-slate-500 text-xs'>{data.term}</div>
    </div>
  )
}

export default ExperienceCard