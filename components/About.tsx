import React from 'react'
import {motion} from "framer-motion"; 
import { PageInfo } from '../typing';


type Props = {
    pageInfo: PageInfo;
}

function About({pageInfo}: Props) {
  return (
    <div className='flex flex-col h-screen relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>


        <motion.img
            src="https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/250912393_1294779787608826_1390802645796562916_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=106&ccb=1-7&_nc_sid=a4a2d7&_nc_ohc=INsaGOAJyhIAX9KLciO&_nc_ht=scontent.fdac24-3.fna&oh=00_AfCDNytfwzeJ0pdneL5G4vq-c9CTuQIim44RwhF2Xv0N5Q&oe=64084216"
            initial = {{
                x: -500,
            }}
            transition = {{
                duration: 1.2,
            }}
            whileInView = {{x : 0}}
            className = "-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px]"

        />

        <div className='space-y-10 px-0 md:px-10'>
            <p className='text-base'>{pageInfo.bgInformation}</p>
        </div>
        
    </div>
  )
}

export default About