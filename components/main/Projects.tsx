import React from 'react'
import ProjectCard from '../sub/ProjectCard'
import { ProjectsData } from '@/constants'

const Projects = () => {
  return (
    <div id='projects' className='flex flex-col items-center justify-center py-20'>
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
            My Projects
        </h1>
        <div className='h-full w-full flex flex-col justify-center md:flex-row gap-10 px-10'>
              {
                ProjectsData.map((project, index) => (
                  <ProjectCard
                    key={index}
                    src={project.src}
                    title={project.title}
                    description={project.description!}
                    url={project.url}
                  />
                ))
              }
        </div>
    </div>
  )
}

export default Projects