import React from 'react'
import { motion } from 'framer-motion'
import { Experiences } from '../typing'
import { urlFor } from '../sanity';


type Props = {
  experience: Experiences;
}

function ExpCard({experience}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px0 xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'> 
        <motion.img 
        initial={{y: -100, opacity: 0}}
        transition = {{duration: 1.2}}
        whileInView = {{opacity: 1, y: 0}}
        className='w-32 h-32 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center' src={urlFor(experience.companyLogo).url()} alt=""/>


        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>{experience.role}</h4>
            <p className='font-bold text-2xl mt-1'>{experience.company}</p>
      
            <p className='uppercase py-5 text-gray-300'>{experience.dateStarted} - {experience.dateEnded}</p>

            <ul className='list-disc space-y-4 ml-5 text-lg'>
              {experience.points.map((pt)=>(
                   <li>{pt}</li>
              ))}
               
          
            </ul>
        </div>
    </article>
  )
}

export default ExpCard