import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '../typing'
import { urlFor } from '../sanity';


type Props = {
  project: Project;
}

export default function ProjectCard({project}: Props) {
  return (
    <motion.div 

        initial={{y: -100, opacity: 0}}
        transition = {{duration: 1.2}}
        whileInView = {{opacity: 1, y: 0}}

    
        className="max-w-sm rounded overflow-hidden shadow-lg flex-shrink-0 px-5 py-5">
        <img className="w-full" src={urlFor(project.projectPic).url()} alt="Sunset in the mountains"/>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{project.title}</div>
            <p className="text-gray-500 text-base h-[150px] overflow-y-auto scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
            {project.description}
            </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {project.tags.map((tg)=>(
              <span className="tags">#{tg}</span>
          ))}
            
        </div>

        <div>
                  <button className='heroButton'><a href={project.github}>Github</a></button>
                  <button className='heroButton'><a href={project.youtube}>Video</a></button>
        </div>
    </motion.div>
  )
}