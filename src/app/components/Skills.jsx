import React from 'react'
const skills = [
    "Java", "Maven", "Quarkus", "Jenkins", "OpenStack", "OpenShift", "SQL", "Docker", "Kubernetes", "ReactJs", "NodeJs"
]
function Skills() {
  return (
    <div className='flex flex-col items-center'>
        <div className='sub-heading'>Skills</div>
        <div className='flex flex-wrap flex-row justify-center sm:text-sm sm:max-w-[30rem] '>
            {
                skills.map((skill, index) =>{
                    return (<div key={index} className='px-2 py-1 bg-[#FEFAE0] rounded-full m-2 shadow-lg'>
                        {skill}
                    </div>)
                })
            }
        </div>

    </div>
  )
}

export default Skills