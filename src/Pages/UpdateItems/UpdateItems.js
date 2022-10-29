import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const UpdateItems = () => {
    const { id } = useParams();
    // console.log(id)
    const [item, setItem] = useState({});
    const { quantity} = item;
    // console.log(quantity)

    // console.log(name)

    useEffect(() => {
        // const url = `https://agile-depths-49882.herokuapp.com/item/${id}`
        fetch(`https://agile-depths-49882.herokuapp.com/item/${id}`)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [id,item])

    
    // handle deliver
  const handelDelivered = () => {
    if (quantity <= 0) {
      toast.error('This item is Sold out');
    } else {
      const oldQuantity = parseInt(quantity);
      const updateQuantity = oldQuantity - 1;
      const url = `https://agile-depths-49882.herokuapp.com/item/${id}`;
      console.log(url)
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



        // const handelDelivered = () => {
        //     if (quantity <= 0) {
        //       toast.error('This item is Sold out');
        //     } else {
        //       const oldQuantity = parseInt(quantity);
        //       const updateQuantity = oldQuantity - 1;
        //       const url = `https://localhost:5000/item/${id}`;
        //       console.log(url)

        //       fetch(url, {
        //         method: 'PUT',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify({ quantity: updateQuantity }),
        //       })
        //         .then((res) => res.json())
        //         .then((data) => {
        //           console.log(data,'ok');
        //           toast.success('Deliver 1 item');
        //         });
        //     }
        //   };

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
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
 
 export default UpdateItems;