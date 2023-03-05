import React from 'react'
import { motion } from 'framer-motion'
import { Achievement } from '../typing';
import { urlFor } from '../sanity';
import SkillCard from './SkillCard';
type Props = {
    prizes: Achievement[];
}

export default function Achievements({prizes}: Props) {
    
  return (
    <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration:2}}
        className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>

        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Achievements
        </h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
            {prizes.map((prize, i)=>(
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                    <motion.img
                        initial={{y:-300, opacity: 0}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 1.5}}
                        src={urlFor(prize.pic).url()}
                        alt=''
                        className='w-60'
                    />

                    <div className='space-y-10 px-10 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>{prize.title}</h4>
                        <h4 className='text-2xl font-semibold text-center'>{prize.contest}</h4>

                        <p className='text-lg text-center md:text-left'>
                            {prize.summary}
                        </p>

                    </div>

                    <div className='flex flex-row space-x-5'>
                        {prize.skills.map((sk)=>(
                            <img className='rounded-full border border-gray-500 object-cover w-16 h-16 xl:w-16 xl:h-16 filter group-hover:grayscale transition duration-300 ease-in-out' src={urlFor(sk.image).url()} alt=""/>
                        ))}
                    </div>
                </div>
            ))}
        </div>

        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'>
        </div>

    </motion.div>
  )
}