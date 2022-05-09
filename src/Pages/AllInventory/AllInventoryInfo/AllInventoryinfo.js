import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const AllInventoryinfo = ({ inventory }) => {
    const { name, quantity, price, description, img, supplierName } = inventory;

    return (
        <div className='my-3 inventory-container col-sm-12 col-md-6 col-lg-4'>
            <CardGroup>
                <Card className='border-0 shadow-lg'>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <small><span className='font-weight-bold'>Supplier Name :</span>{supplierName}</small>
                        <Card.Text className='text-justify'>
                            <span className='font-weight-bold '>Description :</span> {description}
                        </Card.Text>
                        <div className='d-flex justify-content-between '>
                            <p><span className='font-weight-bold'>Price : </span> {price}</p>
                            <p><span className='font-weight-bold'>Quantity : </span>{quantity}</p>
                        </div>
                        <div className='d-flex mt-2'>
                            <button type="button" className="btn btn-outline-dark mx-auto text-center">Delete</button>
                        </div>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
};

export default AllInventoryinfo;