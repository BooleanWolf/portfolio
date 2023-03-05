import React from 'react'
import { motion } from 'framer-motion';
type Props = {}

export default function ResearchCard({}: Props) {
  return (
    <motion.div 
        initial={{opacity: 0, x: -200}}
        whileInView={{opacity: 1, x:0}}
        transition={{duration: 1.5}}
        className="max-w-sm w-full lg:max-w-full lg:flex rounded-[20px] border border-[#292929] shadow-lg">
        <div className="p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
                <div className="text-white-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
                <p className="text-gray-400 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
            </div>
            <div className="flex items-center">
                <div className="text-sm">
                    <p className="text-gray-200 leading-none"><span className='font-semibold'>Authors:</span> Jonathan Reinink</p>
                    <p className="text-gray-600 font-semibold">Published in: IEEE</p>
                </div>
            </div>
        </div>
    </motion.div>
  )
}