import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center text-white mt-1 '>
            <h4 className='m-0'><small>copyright &copy; {year} </small></h4>
        </footer>
    );
};

export default Footer;                      