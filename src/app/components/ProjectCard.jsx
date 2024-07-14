import Link from 'next/link'
import React from 'react'

function ProjectCard({project}) {
  return (
    <div className="h-36 w-64 mt-6 group sm:mx-6 border border-[#BC6C25] shadow-lg rounded-md" style={{background: `url(${project.image})`,  backgroundSize: "cover"}} >
        <Link target="_blank" href={project.view == ""? project.code: project.view} className='p-4 group-hover:flex flex-col hidden overlay absolute bg-black opacity-80 h-36 w-64 text-white justify-around items-center rounded-md'>
            <div className='text-lg tracking-wide font-semibold'>{project.name}</div>
            <div className='text-xs flex flex-row flex-wrap justify-center'>{
                project.techStack.map((tech, index)=>{
                    return <div key={index} className='m-2 border rounded-full py-1 px-2'>{tech}</div>
                })
        }</div>
        </Link>
    </div>
  )
}

export default ProjectCard