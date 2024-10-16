import React from 'react';
import { Link } from 'react-router-dom';

function Btn({ color, text, onClick }) {
    return (
        <button className={color} onClick={onClick}>
            {text}
        </button>
    );
}

export default Btn;