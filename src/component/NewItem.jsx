import React from 'react';

const NewItem = ({url, title, text}) => {
    return (
        <div className='flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]'>
            <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]'>
                <img className='w-1/2 h-1/2 object-contain' src={url} alt="title" />
            </div>
            <div className='mt-[26px] font-eudoxus font-bold text-[24px] leading-[30.24px] text-white'>
                {title}
            </div>
            <div className='flex-1 mt-[16px] font-eudoxus font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]'>
                {text}
            </div>
        </div>
    );
};

export default NewItem;