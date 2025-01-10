import React, { useEffect, useRef } from 'react'
import './pageHeading.css'

function PageHeading({title, numberpg}) {
    return (
        <div className="container-heading w-full h-fit p-5 flex justify-between align-bottom">
            <div className="title-page">{title}</div>
            
        </div>
    )
}

export default PageHeading
