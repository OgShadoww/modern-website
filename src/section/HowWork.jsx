import React from 'react';
import LIstItem from '../component/LIstItem';
import {motion} from 'framer-motion'
import { planerVariants } from '../utils/motion';

const HowWork = () => {
    return (
        <motion.div 
            className='sm:p-16 xs:p-8 px-6 py-12 relative z-10'
            initial='hidden'
            whileInView='visible'
        >
           <div className='2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8'>
                <motion.div className='flex-1 flex justify-center items-center' variants={planerVariants('left', true)}>
                    <img className='w-[90%] h-[90%] object-contain z-10' src="https://metaverse-sage-psi.vercel.app/assets/get-started.d7adf010.png" alt="" />
                </motion.div>
                <motion.div 
                    className='flex flex-col items-start sm:px-[20px px-[20px] z-10'
                    variants={planerVariants('rigth', false)}
                >
                    <div className='text-gray-400 lg:text-[16px]'>
                        How Metaverus Works
                    </div>
                    <div className='text-white font-bold md:text-[64px] text-[40px] max-w-[450px]'>
                        Get started with just a few clicks
                    </div>
                    <div className='mt-[31px] flex flex-col max-w-[370px] gap-[24px]'>
                        <LIstItem number="01" text="Find a world that suits you and you want to enter"/>
                        <LIstItem number="02" text="Enter the world by reading basmalah to be safe"/>
                        <LIstItem number="03" text="No need to beat around the bush, just stay on the gas and have fun"/>
                    </div>
                </motion.div>
            </div>
            <div className='gradient-blue-center'></div>
        </motion.div>  
    );
};

export default HowWork;