import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { Project } from '../typing'

type Props = {
    projects: Project[];
}

function AllProjects({projects}: Props) {

    const tags = ["ROS", "ROS", "Java"]; 
  return (
    <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
        className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>

        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>

        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'> 
            {/* <div className='pt-5 z-20'>
                <button className='heroButton cursor-not-allowed'><span className='underline'>Tags</span></button>
                {tags.map((tag)=>(
                    <button className='heroButton'>{tag}</button>
                ))}
            </div> */}
           
        </h3>
       
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
            {projects.map((project)=>(
                <ProjectCard project={project}/>
            ))}
            
        </div>

       

       


    </motion.div>
  )
}

export default AllProjects