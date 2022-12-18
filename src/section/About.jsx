import React from 'react';
import {AiOutlineArrowDown} from 'react-icons/ai'
import {motion} from 'framer-motion'
import { textShowDelay, titleAnim } from '../utils/motion';
import TextItem from '../component/TextItem';

const About = () => {
    return (
        <motion.div 
            className='flex flex-col text-center justify-center items-center relative mb-[300px]'
            initial="hidden"
            whileInView="visible"
            viewport={{once:true}}
        >
            <TextItem className="text-gray-500 mb-[20px] lg:text-[14px]" title="| About Metaverse"/>
            <motion.span 
                className='text-gray-400 mb-2 font-medium lg:text-[30px] md:text-[20px] sm:text-[18px] lg:px-[100px] md:px-[100px] sm:px-[75px]'
                variants={titleAnim}
            >
                <span className='text-white font-bold'>Metaverse</span> is a new thing in the future, where you can enjoy the virtual world by feeling like it's really real, you can feel what you feel in this metaverse world, because this is really the <span className='text-white'>madness of the metaverse</span> of today, using only <span className='text-white'>VR</span> devices you can easily explore the metaverse world you want, turn your dreams into reality. Let's <span className='text-white'>explore</span> the madness of the metaverse by scrolling down
            </motion.span>
            <div className='gradient-green-about'>

            </div>
            <div className='gradient-blue-about'>

            </div>
            <div className='gradient-center-about'>

            </div>
        </motion.div>
    );
};

export default About;