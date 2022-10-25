import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateItems = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    console.log(item._id,item.quantity,item)

    useEffect(() => {
        // const url = `http://localhost:5000/item/${id}`
        fetch(`http://localhost:5000/item/${id}`)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [id])

    // Delivered btn
    const handelDelivered = (e) => {
        console.log('click')
        if(item.quantity){
            
        }
        

    }

    return (
        <div>
            <div className='container my-5'>
                <div className='row ber g-4'>
                    <div className="col col-md-6 col-lg-6 border border-3">
                        <img className='w-100 img-fluid' src={item.img} alt="" />
                    </div>
                    <div className="col col-md-6 col-lg-6 border-dark border border-3 p-3">
                        <div className=''>
                            <p className='mb-1'>Name : {item.name}</p>
                            <p className='mb-1'>ID : {item._id}</p>
                            <p className='mb-1'>Price : {item.price}</p>
                            <p className='mb-1'>Description : {item.description}</p>
                            <p className='mb-1'>Supplier : {item.supplierName}</p>
                            <p className=''>Quantity : {item.quantity}</p>
                        </div>

                        <div className='mb-3 d-flex'>
                            <button onClick={handelDelivered} className='btn btn-secondary'>Delivered</button>
                            <input type="text" name="" className=' form-control text-center rounded  mx-2' style={{ width: "10%" }} id="" />
                            <button className='btn btn-secondary'>ReStock items</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateItems;