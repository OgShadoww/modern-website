import React from 'react';
import { heroAnim, SlideUp } from '../utils/motion';
import {motion} from 'framer-motion'

const Hero = () => {
    return (
        <motion.div
            className='flex flex-col justify-center relative sm:py-16 xs:py-8 py-12 sm:pl-16 pl-6'
            initial='hidden'
            whileInView="visible"
         >
            <motion.span
                className='flex justify-center items-center flex-col relative z-10'
                variants={SlideUp(1.7, 600)}
            >
                <h1 className='font-eudoxus font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white'>
                    Metaverse
                </h1>
                <span className='flex flex-row justify-center items-center'>
                    <h1 className='font-eudoxus font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white'>Ma</h1>
                    <div className='md:w-[212px] sm:w-[80px] w-[60px] md:h-[108px] sm:h-[48px] h-[38px] md:border-[18px] border-[9px] rounded-r-[50px] border-white sm:mx-2 mx-[6px]'></div>
                    <h1 className='font-eudoxus font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white'>ness</h1>
                </span>
            </motion.span>
            <motion.div 
                className='relative w-full md:-mt-[20px] -mt-[12px]'
                variants={heroAnim}
            >
                <div className='absolute w-full h-[300px] gradient-02 rounded-tl-[140px] z-[0] -top-[30px]'></div>
                <img className='w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative' src="https://metaverse-sage-psi.vercel.app/assets/hero.30167500.png" alt="" />
                <div className='w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10'>
                    <img src="https://metaverse-sage-psi.vercel.app/assets/stamp.bfa88915.png" className='sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain' alt="" />
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Hero;