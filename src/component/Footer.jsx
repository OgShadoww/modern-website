import React from 'react';
import {motion} from 'framer-motion'
import { footerVariants } from '../utils/motion';

const Footer = () => {
    return (
        <motion.footer 
            className='sm:px-16 px-6 py-8 relative'
            initial="hidden"
            whileInView="show"
            variants={footerVariants}
        >
            <div className='footer-gradient'></div>
            <div className='2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8'>
                <div className='flex items-center justify-between flex-wrap gap-5'>
                    <h4 class="font-eudoxus font-bold md:text-[64px] text-[44px] text-white">Enter the Metaverse</h4>
                    <button className='flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]'>
                        <img src="https://metaverse-sage-psi.vercel.app/assets/headset.8295e63b.svg" className='w-[24px] h-[24px] object-contain' alt="" />
                        <span class="font-eudoxus font-normal text-[16px] text-white">Enter Metaverse</span>
                    </button>
                </div>
                <div className='flex flex-col'>
                    <div className='mb-[50px] h-[2px] bg-[#fff] opacity-10'></div>
                    <div className='flex items-center justify-between flex-wrap gap-4'>
                        <h4 class="font-eudoxus font-extrabold text-[24px] text-white">METAVERUS</h4>
                        <p class="font-eudoxus font-normal text-[14px] text-[#fff] opacity-50">Copyright © 2021 - 2022 Metaversus. All rights reserved.</p>
                        <div className='flex gap-4'>
                            <img src="https://metaverse-sage-psi.vercel.app/assets/twitter.a0aa88f4.svg" className='w-[24px] h-[24px] object-contain' alt="" />
                            <img src="https://metaverse-sage-psi.vercel.app/assets/linkedin.f1f74caa.svg" className='w-[24px] h-[24px] object-contain' alt="" />
                            <img src="https://metaverse-sage-psi.vercel.app/assets/instagram.933c9432.svg" className='w-[24px] h-[24px] object-contain' alt="" />
                            <img src="https://metaverse-sage-psi.vercel.app/assets/facebook.d0868d70.svg" className='w-[24px] h-[24px] object-contain' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;