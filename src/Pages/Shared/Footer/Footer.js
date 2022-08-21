import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center text-white mt-1 '>
            <h5 className='m-0'><small>copyright &copy; {year} </small></h5>
        </footer>
    );
};

export default Footer;                      