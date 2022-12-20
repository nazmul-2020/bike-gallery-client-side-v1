import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const UpdateItems = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const { quantity } = item;


    useEffect(() => {
        // const url = `https://bike-gallery-server-side.up.railway.app/item/${id}`
        fetch(`https://bike-gallery-server-side.up.railway.app/item/${id}`)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [id])


    // handle deliver
    const handelDelivered = () => {
        if (quantity <= 0) {
            toast.error('This item is Sold out');
        } else {
            const oldQuantity = parseInt(quantity);
            const updateQuantity = oldQuantity - 1;
            const url = `https://bike-gallery-server-side.up.railway.app/item/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ quantity: updateQuantity }),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    toast.success('Deliver 1 item');
                });
        }
    };


    const handleQuantity = (event) => {
        event.preventDefault();
         
        let inputFiled = event.target.quantity.value;
        let remaining = parseFloat(+item.quantity) + parseFloat(inputFiled);
        let newInventory = {
            quantity: remaining,
        };
        
        fetch(`https://bike-gallery-server-side.up.railway.app/item/${id}`, {
            method: "PUT",
            body: JSON.stringify(newInventory),
            headers: {
                "Content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                event.target.reset();
                toast.success('Successfully ReStock item  ')
                console.log(data);
            });
    };

    return (
        <div   style={{height:"80vh"}} >
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
                            <div>
                                <form className='d-flex' onSubmit={handleQuantity}>
                                    <input type="number" required  name="quantity" className=' form-control text-center rounded  mx-2' style={{ width: "25%" }} id="" />
                                    <button type='submit' className='btn btn-secondary'>ReStock items</button>
                                </form>
                            </div>
                        </div>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateItems;