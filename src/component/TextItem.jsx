import React from 'react';
import {motion} from 'framer-motion'
import { textShowDelay } from '../utils/motion';

const TextItem = ({title, className}) => {
    return (
        <p className={className}>
            {Array.from(title).map((letter, index) => (
                <motion.span variants={textShowDelay(index / 9.5)} key={index}>
                    {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
            ))}
        </p>
    );
};

export default TextItem;