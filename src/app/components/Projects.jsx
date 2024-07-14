import React from 'react'
import ProjectCard from './ProjectCard'
const projects = [
    {
        name: "BugPolice",
        techStack: ["Express.js", "NodeJs","Bootstrap","HTML","CSS"],
        code: "https://github.com/vardhmanJain/BugTrackingApp",
        view: "",
        image: "/images/bug-police.png"

    },
    {
        name: "Shortest Path Visualizer",
        techStack: ["JavaScript","HTML","CSS"],
        code: "https://github.com/vardhmanJain/ShortestPathVisualizer",
        view: "https://shortest-path-visualizer.vercel.app/",
        image: "/images/shortest-path-visualizer.png"
    }
]
function Projects() {
  return (
    <div id="projects" className='flex flex-col items-center mt-10'>
        <div className='sub-heading'>Projects</div>
        <div className='flex flex-col items-center sm:flex-row sm:flex-wrap'>
            {
                projects.map((project, index) => {
                    return <ProjectCard key={index} project={project}/>
                })
            }
        </div>
    </div>
  )
}

export default Projects