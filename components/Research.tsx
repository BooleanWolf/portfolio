import React from 'react'
import { motion } from 'framer-motion'
import ResearchCard from './ResearchCard';
type Props = {}

export default function Research({}: Props) {
    const tags = ["ROS", "ROS", "Java"]; 
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>

    <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Research Papers
    </h3>

  

    <div className='overflow-x-auto h-[600px] space-y-5 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        {/* <ResearchCard/> */}
       
    </div>

    <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] skew-y-12 pointer-events-none'>
    </div>

</motion.div>
  )
}