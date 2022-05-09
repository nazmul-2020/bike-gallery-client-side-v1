import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const AllInventoryinfo = ({ inventory }) => {
    const { name, quantity, price, description, img, supplierName } = inventory;

    const [item, setItem] = useState([]);
    useEffect( () =>{
        fetch('https://agile-depths-49882.herokuapp.com/item')
        .then(res => res.json())
        .then(data => setItem(data));
    }, []);


    
    

    const handelDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://agile-depths-49882.herokuapp.com/item/${id}`
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = item.filter(service => service._id !== id)
                    setItem(remaining)
                })
        }
    }

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
                            <button type="button" className="btn btn-outline-dark mx-auto text-center" onClick={()=>handelDelete(item._id)}>Delete</button>
                        </div>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
};

export default AllInventoryinfo;