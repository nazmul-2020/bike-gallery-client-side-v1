import React from 'react';
import { InputGroup, Button, Form } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            <div className='mt-5  bg-dark text-white'>
                <div className='container'>
                    <div className='row py-4 footer'>
                        <div className=' col-12 col-md-6 col-lg-3 mx-auto'>
                            <h6 className='mb-0'>MENU</h6>
                            <p className='mb-0 mt-2'>Home</p>
                            <p className='mb-0'>Manage Items</p>
                            <p className='mb-0'>Add Item</p>
                            <p className='mb-0'>My Items</p>
                            <p className='mb-0'>Blogs</p>
                        </div>
                        <div className=' col-12 col-md-6 col-lg-3'>
                            <h6 className='mb-0'>SERVICE</h6>
                            <p className='mb-0 mt-2'>Deliver Organic Food</p>
                            <p className='mb-0'>On Time Delivery</p>
                            <p className='mb-0'>Home Delivery</p>
                            <p className='mb-0'>Customer Satisfaction</p>
                        </div>
                        <div className=' col-12 col-md-6 col-lg-3'>
                            <h6 className='mb-0 '>ADDRESS</h6>
                            <p className='mb-0 mt-2'>Address: Bangladesh, Cumilla</p>
                            <p className='mb-0'>Email: nazmulcpi2012@gmail.com</p>
                        </div>

                        <div className=' col-12 col-md-6 col-lg-3'>
                            <h6 className='mb-3'>NEWSLETTER</h6>
                            <Form.Label>Enter your email address</Form.Label>
                            <InputGroup className="mb-3 ">
                                <Form.Control
                                    placeholder="username@site.com"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <Button variant="outline-secondary" id="button-addon2" className='bg-info'>
                                    Subscribe
                                </Button>
                            </InputGroup>
                        </div>
                    </div>
                </div>
                {/* <ScrollToTop smooth top='300' color='red' /> */}
                
            </div>
        </div>
    );
};

export default Footer;                      