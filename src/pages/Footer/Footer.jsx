import React from 'react';

const Footer = () => {
    const current = new Date();
    return (
        <div className='bg-slate-700 text-white text-center'>
             <p>© {current.getFullYear()} - Fahim. All Rights Reserved.</p>
        </div>
    );
};

export default Footer;