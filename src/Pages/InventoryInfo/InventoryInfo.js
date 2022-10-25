import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const InventoryInfo = ({ inventory }) => {
    const { _id, name, quantity, price, description, img, supplierName } = inventory
    // console.log(inventory._id);

    const navigate = useNavigate();

    /* navigate 2 */
    // const aaa = id => {
    //     navigate(`/inventory/${_id}`)
    // }

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
                            <p> <span className='font-weight-bold'>Quantity : </span>{quantity}</p>
                        </div>

                        <div className=''>
                            {/* navigate 1 */}
                            {/* <Link to={`/inventory/${_id}`}>
                                <button type="button" className="btn btn-dark d-block w-100">Stock Update</button>
                            </Link> */}

                            {/* navigate 2 */}
                            {/* <button onClick={()=>aaa (_id)} type="button" className="btn btn-dark d-block w-100">Stock Update</button> */}

                            {/* navigate 3 */}
                            <button onClick={() => navigate(`/inventory/${_id}`)} type="button" className="btn btn-dark d-block w-100">Stock Update</button>

                        </div>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>

    );
};

export default InventoryInfo;