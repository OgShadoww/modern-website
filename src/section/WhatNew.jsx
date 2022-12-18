import React from 'react';
import {motion} from 'framer-motion'
import { planerVariants } from '../utils/motion';
import NewItem from '../component/NewItem';

const WhatNew = () => {
    return (
        <motion.div 
            className='sm:p-16 xs:p-8 px-6 py-12 relative z-10'
            initial='hidden'
            whileInView='visible'
            viewport={{once:true}}
        >
           <div className='2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8'>
                <motion.div variants={planerVariants('left', false)} className='flex-[0.95] flex justify-center flex-col'>
                    <div className='text-gray-400 z-10 text-[16px]'>
                        | Whats new?
                    </div>
                    <div className='text-white font-bold md:text-[64px] text-[40px] z-10 max-w-[550px]'>
                        What's new about Metaversus?
                    </div>
                    <div className='mt-[48px] flex flex-wrap justify-between gap-[24px]'>
                        <NewItem url="https://metaverse-sage-psi.vercel.app/assets/vrpano.377bf149.svg" title="Title A new world" text="we have the latest update with new world for you to try never mind"/>
                        <NewItem url="https://metaverse-sage-psi.vercel.app/assets/headset.8295e63b.svg" title="Title More realistic" text="In the latest update, your eyes are narrow, making the world more realistic than ever"/>
                    </div>
                </motion.div>
                <motion.div className='flex-1 flex justify-center items-center' variants={planerVariants('rigth', true)}>
                    <img className='w-[90%] h-[90%] object-contain' src="https://metaverse-sage-psi.vercel.app/assets/whats-new.cb056360.png" alt="" />
                </motion.div>
           </div>
        </motion.div>
    );
};

export default WhatNew;