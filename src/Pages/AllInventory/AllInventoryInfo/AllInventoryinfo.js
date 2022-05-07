import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const AllInventoryinfo = ({inventory}) => {
    const { name, quantity, price, description, img, supplierName } = inventory;

    return (
        <div className='my-3 inventory-container col-sm-12 col-md-6 col-lg-4'>
        <CardGroup>
            <Card className='border-0 shadow-lg'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <small><span className='font-weight-bold'>Supplier Name :</span>{supplierName}</small>
                        <p>
                            Description: {description}
                        </p>
                    </Card.Text>
                    <div className='d-flex justify-content-between '>
                        <p><span className='font-weight-bold'>Price : </span> {price}</p>
                        <p> <span className='font-weight-bold'>Quantity : </span>{quantity}</p>
                    </div>

                    <div className='d-flex justify-content-between'>
                        <button type="button" className="btn btn-dark">Deliver</button>
                        <button type="button" className="btn btn-dark">Manage Item</button>
                    </div>
                </Card.Body>
            </Card>
        </CardGroup>
    </div>
    );
};

export default AllInventoryinfo;