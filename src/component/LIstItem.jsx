import React from 'react';

const LIstItem = ({number, text}) => {
    return (
        <div className='flex justify-center items-center flex-row'>
            <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]'>
                <span className='font-eudoxus font-bold text-[20px] text-white'>{number}</span>
            </div>
            <div className='flex-1 ml-[30px] font-eudoxus font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]'>
                {text}
            </div>
        </div>
    );
};

export default LIstItem;