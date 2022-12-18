import React from 'react';
import {motion} from 'framer-motion'
import { SlideUp } from '../utils/motion';

const PostItem = ({url, title, description, delay}) => {
    return (
        <motion.div
            className='flex md:flex-row flex-col gap-4 z-10' 
            variants={SlideUp(delay, 400)}
        >   
            <img src={url} alt={title} className='md:w-[270px] w-full h-[250px] rounded-[32px] object-cover' />
            <div className='w-full flex justify-between items-center'>
                <div className='flex-1 md:ml-[62px] flex flex-col max-w-[650px]'>
                    <h4 class="font-eudoxus font-normal lg:text-[42px] text-[26px] text-white">{title}</h4>
                    <p className='mt-[16px] font-eudoxus font-normal lg:text-[20px] text-[14px] text-[#c7c7c7]'>
                        {description}
                    </p>
                </div>
                <div className='lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white'>
                    <img src="https://metaverse-sage-psi.vercel.app/assets/arrow.bd11464f.svg" className='w-[40%] h-[40%] object-contain' alt="" />
                </div>
            </div>
        </motion.div>
    );
};

export default PostItem;