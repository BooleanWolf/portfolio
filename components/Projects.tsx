import React from 'react'
import { motion } from 'framer-motion';
import { Project } from '../typing';
import { urlFor } from '../sanity';
import SkillCard from './SkillCard';


type Props = {
    projects: Project[];
}

function Projects({projects}: Props) {



  return (
    <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
        className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>

        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Featured Projects
        </h3>

        <h3 className='absolute top-36 uppercase tracking-[10px] text-gray-500 text-1xl'>
            Scroll right to see more
        </h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
            {projects.map((project)=>(
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                    <motion.img
                         initial={{y:-300, opacity: 0}}
                         whileInView={{opacity: 1, y: 0}}
                         transition={{duration: 1.5}}
                        src={urlFor(project.projectPic).url()}
                        alt=''
                        className='w-[500px]'
                    />

                    <div className='space-y-10 px-10 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>{project.title}</h4>

                        <p className='text-lg text-center md:text-left'>
                            {project.description}
                        </p>

                        <button className='heroButton'><a href={project.github}>Github</a></button>
                        <button className='heroButton'><a href={project.youtube}>Video</a></button>
                      
                    </div>

                    
                  
                </div>
            ))}
        </div>




        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'>
        </div>

    </motion.div>
  )
}

export default Projects