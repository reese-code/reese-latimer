import React from 'react';
import './closeX.css';
import {motion} from 'framer-motion';

const barLeft = {
    initial: { rotate: -45 },
    animate: { rotate: 45 },
}

const barRight = {
    initial: { rotate: 45 },
    animate: { rotate: -45 },
}

const DURATION = 0.1;



export default CloseX;