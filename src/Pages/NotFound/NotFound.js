import React from 'react';
import notFound from '../../images/404-not-found.png'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="notfound-container">
            <div className='notFound'>
                <h1 className='text-center'>Page Not Found 404 !! </h1>
                <img src={notFound} alt="" />
            </div>
        </div>
    );
};

export default NotFound;