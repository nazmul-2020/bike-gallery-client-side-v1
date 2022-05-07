import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const InventoryInfo = ({ inventory }) => {
    const { name, quantity, price, description, img, supplierName } = inventory

    return (

        <div className='my-3 inventory-container col-sm-12 col-md-6 col-lg-4'>
            <CardGroup>
                <Card className='border-0 shadow-lg'>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <div className='d-flex justify-content-between '>
                            <p className=''>Price: {price}</p>
                            <p className=''>Quantity: {quantity}</p>
                        </div>
                        <small><span>Supplier Name :</span>{supplierName}</small>
                        <Card.Text>
                            Description: {description}
                        </Card.Text>
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

export default InventoryInfo;