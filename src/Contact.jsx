import React, { useEffect } from 'react';
import './contact.css';

function Contact() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "//embed.typeform.com/next/embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className='contact-form' data-tf-live="01JBR2MBJ637QWRS49PYEN4H2S"></div>
    );
}

export default Contact
