import React from 'react';
import PostItem from '../component/PostItem';
import TextItem from '../component/TextItem';
import {motion} from 'framer-motion'

const Insight = () => {
    return (
        <motion.div 
            className='sm:p-16 xs:p-8 px-6 py-12 relative z-10'
            initial="hidden"
            whileInView="visible"
        >
            <div className='2xl:max-w-[1280px] w-full mx-auto flex flex-col'>
                <TextItem className="font-eudoxus font-normal text-[16px] text-gray-500 text-center" title="| Insight"/>
                <div className='mt-[8px] font-eudoxus font-bold md:text-[64px] text-[44px] text-white text-center'>
                    Insight about metaverse
                </div>
                <motion.div 
                    className='mt-[50px] flex flex-col gap-[30px]'
                >
                    <PostItem delay='0.3' url="https://metaverse-sage-psi.vercel.app/assets/planet-01.c513d884.png" title="The launch of the Metaverse makes Elon musk ketar-ketir" description="Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique."/>
                    <PostItem delay='0.6' url="https://metaverse-sage-psi.vercel.app/assets/planet-02.1fce00af.png" title="7 tips to easily master the madness of the Metaverse" description="Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum"/>
                    <PostItem delay="0.9" url="https://metaverse-sage-psi.vercel.app/assets/planet-03.a8a85679.png" title="With one platform you can explore the whole world virtually" description="Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem"/>
                </motion.div>
                <div className='gradient-blue-center'>

                </div>
            </div>
        </motion.div>
    );
};

export default Insight;