import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const AllInventoryinfo = ({ inventory }) => {
    const { _id, name, quantity, price, description, img, supplierName } = inventory;
    // console.log(_id)

    const [items, setItems] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://bike-gallery-server-side.up.railway.app/item')
            .then(res => res.json())
            .then(data => {
                setItems(data)
                // console.log(data)
            });
    }, []);


    const handelDelete = (id) => {
        // const proceed = window.confirm('Are you sure?');
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this item!!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                const url = `https://bike-gallery-server-side.up.railway.app/item/${id}`
                fetch(url, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        const remaining = items.filter(service => service._id !== id)
                        setItems(remaining)
                    })
            }
        })

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
                        <div className='d-flex justify-content-between mt-2'>

                            <button onClick={() => navigate(`/inventory/${_id}`)} type="button" className="btn btn-dark d-block ">Stock Update</button>

                            <button type="button" className="btn btn-outline-danger d-block mx-aut " onClick={() => handelDelete(_id)}>Delete</button>
                        </div>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
};

export default AllInventoryinfo;