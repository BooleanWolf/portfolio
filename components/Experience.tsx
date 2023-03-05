import React from 'react';
import {motion} from "framer-motion"; 
import ExpCard from './ExpCard';
import { Experiences } from '../typing';


type Props = {
  experiences: Experiences[];
}

function Experience({experiences}: Props) {
  return (
    <motion.div  
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}} 
    
        className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center '>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Experience
        </h3>

        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
           {experiences.map((exp)=>(
              <ExpCard key={exp._id} experience = {exp}/>
           ))}
           
           
        </div>

    </motion.div>
  )
}

export default Experience