import React, { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import './AddItem.css'

const AddItem = () => {
    const { register, reset, handleSubmit } = useForm();
    const [user] = useAuthState(auth)


    const onSubmit = data => {
        const url = `https://bike-gallery-server-side.up.railway.app/item`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                reset()
                toast.success('Add 1 item');
            })

    };

    return (

        <div className='m-5  mx-auto p-4 shadow-lg form-container '>
            <h3 className='text-center text-dark'> Please Add Item</h3>

            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" {...register("name", { required: true, maxLength: 20 })} placeholder="Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                    <Form.Control type="number" {...register("price")} placeholder="Price" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                    <Form.Control type="number" {...register("quantity")} placeholder="Quantity" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                    <Form.Control type="text" {...register("img")} placeholder="Photo URL" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                    <Form.Control type="text" {...register("description",)} placeholder="Description" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                    <Form.Control type="text" {...register("supplierName", { required: true, maxLength: 20 })} placeholder="Supplier Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                    <Form.Control type="email" {...register("email", { required: true, })} placeholder="Email"
                    defaultValue={user?.email} readOnly
                    />
                </Form.Group>

                <Button className='w-75 mx-auto  d-block' variant="primary" type="submit">
                    Add
                </Button>
            </Form>
            <ToastContainer />
        </div>
    );
};

export default AddItem;