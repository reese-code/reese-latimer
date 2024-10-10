import { useState } from 'react'
import { Link } from 'react-router-dom';

function Btn({ color, text, direction }) {
    return(
        <>
            <Link className={color} to={direction} >{text}</Link>
        </>
    )
}

export default Btn