import React from 'react';
import g1 from '../../../images/Gallery/g1.png'
import g2 from '../../../images/Gallery/g2.png'
import g3 from '../../../images/Gallery/g3.png'
import g4 from '../../../images/Gallery/g4.jpeg'
import g5 from '../../../images/Gallery/g5.jpeg'
import g6 from '../../../images/Gallery/g6.jpeg'
import g7 from '../../../images/Gallery/g7.jpeg'
import g8 from '../../../images/Gallery/g8.jpg'

const Gallery = () => {
    return (
        <div>
            <h1 className='text-center p-4 text-success'>Photo Gallery</h1><div className="container mt-5">
                <div className="row">
                    <div className="col-4">
                        <div className="row">
                            <img className="img-fluid mb-3 -" src={g1} alt=""></img>
                        </div>
                        <div className="row">
                            <img className="img-fluid mb-3 " src={g5} alt=""></img>
                        </div>
                        <div className="row">
                            <img className="img-fluid mb-3 " src={g2} alt=""></img>
                        </div>
                        <div className="row">
                            <img className="img-fluid mb-3 " src={g3} alt=""></img>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="row">
                            <img className="img-fluid mb-3 " src={g4} alt=""></img>
                        </div>
                        <div className="row">
                            <img className="img-fluid mb-3 " src={g6} alt=""></img>
                        </div>
                        {/* <div className="row">
                            <img className="img-fluid mb-3 " src={g6} alt=""></img>
                        </div> */}
                    </div>

                    <div className="col-4">
                        <div className="row">
                            <img className="img-fluid mb-3 " src={g8} alt=""></img>
                        </div>
                        <div className="row ">
                            <img className="img-fluid mb-3 " src={g7} alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;