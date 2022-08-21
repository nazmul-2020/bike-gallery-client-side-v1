import React, { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './AddItem.css'

const AddItem = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)
        const url = `https://agile-depths-49882.herokuapp.com/item`;
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
                alert('users added successfully!!!');
            })

    };

    return (
        
        <div className='m-5  mx-auto p-4 shadow-lg form-container '>
            <h3 className='text-center text-dark'> Please Add Item</h3>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="name" {...register("name", { required: true, maxLength: 20 })} placeholder="Name" required />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="email" {...register("email", { required: true, maxLength: 20 })} placeholder="Enter email" required />
                </Form.Group> */}

                <Form.Group className="mb-3" controlId="">
                    <Form.Control type="number" {...register("price")} placeholder="Price" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                    <Form.Control type="number" {...register("price")} placeholder="Quantity" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                    <Form.Control type="text" {...register("img")} placeholder="Photo URL" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                    <Form.Control type="text" {...register("description",)} placeholder="Description" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                    <Form.Control type="text" {...register("name", { required: true, maxLength: 20 })} placeholder="Supplier Name" required />
                </Form.Group>

                <Button className='w-75 mx-auto  d-block' variant="primary" type="submit">
                    Add
                </Button>
            </Form>
        </div>
    );
};

export default AddItem;