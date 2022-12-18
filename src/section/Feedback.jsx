import React from 'react';
import {motion} from 'framer-motion'
import { planerVariants } from '../utils/motion';

const Feedback = () => {
    return (
        <motion.div 
            className='sm:p-16 xs:p-8 px-6 py-12'
            initial='hidden'
            whileInView="visible"
        >
            <div className='2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-6'>
                <motion.div
                    className='flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-01 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative'
                    variants={planerVariants('left', false)}
                >
                    <div className='feedback-gradient'>

                    </div>
                    <div className=''>
                        <div className='font-eudoxus font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white'>
                            Samantha
                        </div>
                        <p className='mt-[8px] font-eudoxus font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white'>
                            Founder Metaverus
                        </p>    
                    </div>
                    <p className='mt-[24px] font-eudoxus font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white'>
                        “With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything”
                    </p>
                </motion.div>
                <motion.div 
                    className='relative flex-1 flex justify-center items-center'
                    variants={planerVariants('rigth', false)}
                >
                    <img src="https://metaverse-sage-psi.vercel.app/assets/planet-09.cee4529b.png" className='w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]' alt="" />
                    <div className='lg:block hidden absolute -left-[10%] top-[3%]'>
                        <img src="https://metaverse-sage-psi.vercel.app/assets/stamp.bfa88915.png" className='w-[155px] h-[155px] object-contain' alt="" />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Feedback;