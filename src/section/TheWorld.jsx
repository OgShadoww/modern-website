import { list } from '../image-list/list';
import React from 'react';
import TextItem from '../component/TextItem';
import {motion} from 'framer-motion'
import { SlideUp, slideIn } from '../utils/motion';

const TheWorld = ({current, setCurrent}) => {
    return (
        <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{once:true}}
            className='text-center lg:mb-[200px] sm:mb-[140px] relative'
        >
            <TextItem className="text-gray-500 lg:text-[14px]" title="| The World"/>
            <motion.h1 
                className='mt-[8px] font-eudoxus font-bold md:text-[64px] text-[40px] text-white text-center'
                variants={SlideUp(0, 440)}
            >
                Choose the world you want <br /> to explore
            </motion.h1>
            <div className='mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5 px-[5%]'>
                {list.map((img, i) => 
                    <motion.div 
                        className={current == img.id ? 'relative lg:flex-[3.5] flex-[10] flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.3s] ease-out-flex cursor-pointer' : 'relative lg:flex-[0.5] flex-[2] flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer'}
                        key={img.id} 
                        onClick={() => setCurrent(img.id)}
                        variants={slideIn(i / 2)}
                    >
                        <img src={img.img} className='absolute w-full h-full object-cover rounded-[24px]' alt="" />
                        <div className={current === img.id ? 'flex flex-col z-10 w-full justify-end text-center items-start bg-black bg-opacity-50 h-[50%] absolute bottom-0 px-[40px] pb-[90px] sm:h-[90%] lg:h-[50%]' : 'flex items-center justify-center'}>
                            <div className={current === img.id ? 'flex justify-center items-center w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px] z-10 bg-gray-500 border-gray-400 border-[1px] relative' : 'opacity-0'}>
                                <img src="https://metaverse-sage-psi.vercel.app/assets/headset.8295e63b.svg" className={current === img.id ? 'w-[20px] h-[20px] z-10 absolute opacity-1': 'w-0 h-0'} alt="" />
                            </div>
                            <span className={current === img.id ? 'text-white text-[15px]' : 'opacity-0'}>
                                ENTER METAVERSE
                            </span>
                            <span className={current === img.id ? 'absolute text-white font-bold text-[24px] bottom-[30px]' : 'absolute text-white font-bold text-[24px] lg:rotate-90 lg:bottom-[100px] md:bottom-[10px]'}>
                                {img.title}
                            </span>
                        </div>
                    </motion.div>    
                )}
            </div>
            <div className='gradient-blue-the-world'>

            </div>
        </motion.div>
    );
};

export default TheWorld;