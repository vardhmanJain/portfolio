import React from 'react'
import ExperienceCard from './ExperienceCard'
const experience = [
    {
        logo: "/images/REDHAT-LOGO.png",
        company: "Red Hat",
        position: "Associate Software Engineer",
        term: "07/2022 - Present"
    },
    {
        logo: "/images/REDHAT-LOGO.png",
        company: "Red Hat",
        position: "Software Engineering Intern",
        term: "01/2022 - 06/2022"
    },
    {
        logo: "/images/TIF-LOGO.svg",
        company: "The Internet Folks",
        position: "Software Engineering Intern",
        term: "05/2021 - 07/2021"
    }
]
function Experience() {
  return (
    <div className='flex flex-col text-center my-10'>
        <div className='sub-heading'>Experience</div>
        <div className='sm:px-5 border rounded-lg border-[#bc6c25] sub-heading flex flex-col items-center sm:flex-row sm:justify-between'>
            {
                experience.map((data, index) =>{
                    return <ExperienceCard key={index} data={data}/>
                })
            }
        </div>
    </div>
  )
}

export default Experience