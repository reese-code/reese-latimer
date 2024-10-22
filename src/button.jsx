import React from 'react';
import { Link } from 'react-router-dom';

function Btn({ color, text, onClick, direction }) {
    return (
        <Link to={direction} className={color} onClick={onClick}>
            {text}
        </Link>
    );
}

export default Btn;