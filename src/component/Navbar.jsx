import React from 'react';
import {BsSearch} from 'react-icons/bs'
import {CgMenuRight} from 'react-icons/cg'
import {motion} from 'framer-motion'
import { navVariants } from '../utils/motion';

const Navbar = () => {
    return (
        <motion.div
            className='relative sm-px-16 px-6 py-8 mb-[50px]'
            variants={navVariants}
            initial="hidden"
            whileInView="show"
            
         >
            <div className='gradient-pink-navbar absolute'></div>
            <div className='gradient-white-navbar absolute'></div>
            <div className='gradient-blue-navbar absolute'></div>
            <div className='2xl:max-w-[1280px] w-full mx-auto flex justify-between gap-8'>
                <BsSearch className='text-white z-10' style={{fontSize:"25px"}}/>
                <div className='uppercase text-white font-bold text-xl z-10'>
                    Metaverse
                </div>
                <CgMenuRight className='text-white text-2xl z-10'/>
            </div>
        </motion.div>
    );
};

export default Navbar;