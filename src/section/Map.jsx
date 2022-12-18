import React from 'react';
import TextItem from '../component/TextItem';
import {motion} from 'framer-motion'
import { mapAnim, SlideUp } from '../utils/motion';

const Map = () => {
    return (
        <motion.div 
            className='sm:p-16 xs:p-8 px-6 py-12 relative z-10'
            initial="hidden"
            whileInView="visible"
            viewport={{once:true}}
        >
            <div className='2xl:max-w-[1280px] w-full mx-auto flex flex-col'>
                <TextItem className="text-gray-500 text-center" title="| People on the World"/>
                <motion.div 
                    className='mt-[8px] font-eudoxus font-bold md:text-[64px] text-[44px] text-white text-center'
                    variants={SlideUp(0, 420)}
                >
                    Track friends around you and invite them to play together in the same world
                </motion.div>
                <motion.div 
                    className='relative mt-[68px] flex w-full h-[550px]'
                    variants={mapAnim}
                >
                    <img src="https://metaverse-sage-psi.vercel.app/assets/map.407234c2.png" className='w-full h-full object-cover' alt="" />
                    <div className='absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]'>
                        <img src="https://metaverse-sage-psi.vercel.app/assets/people-02.420b22c0.png" alt="" />
                    </div>
                    <div className='absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]'>
                        <img src="https://metaverse-sage-psi.vercel.app/assets/people-01.22f79a5b.png" className='w-full h-full' alt="" />
                    </div>
                    <div className='absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]'>
                        <img src="https://metaverse-sage-psi.vercel.app/assets/people-03.ad4613f0.png" className='w-full h-full' alt="" />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Map;