import React from 'react';
import useInventoryItem from '../../hooks/useInventoryItem';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init"
import { AiOutlineDelete } from 'react-icons/ai';
import { Table } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';

const MyItems = () => {
    let n = 0;
    const [user] = useAuthState(auth)
    // console.log(user)
    // const [items, setItems] = useState([]);
    const [items, setItems] = useInventoryItem();
    // console.log(items)

    useEffect(() => {
        const email = user.email
        // console.log(email)
        const url = `https://bike-gallery-server-side.onrender.com/myItem?email=${email}`
        console.log(url)
        fetch(url)
        .then(res=>res.json())
        .then(data=>{setItems(data)
        // console.log(data)
        })
    }, [])


    return (
        <div className='container my-5 '>
            {/* <h2 className='text-center mb-2'>MyItems : {itemsa.length}</h2> */}
            <h2 className='text-center mb-2'>MyItems : {items.length}</h2>
            <p className='text-center'>{user?.displayName}</p>
            <img src={user?.photoURL} alt="" />

            <div className='border'>
                <Table className='text-center' hover size="">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            items.map(item => <tr key={item._id}>
                                <td>{++n}</td>
                                <td><img className='rounded-circle' width={"70px"} src={item.img} alt="" /></td>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td><h3><AiOutlineDelete className='text-danger fw-bold' /></h3></td>
                            </tr>)
                        }


                    </tbody>
                </Table>
            </div> 










            {/* <table className="min-w-full"  >
                <thead className="bg-white border-[1px] ">
                    <tr>
                        <th scope="col" className="text-sm font-medium text-gray-900 lg:px-6text-left">
                            #
                        </th>
                        <th scope="col" className="text-sm text-center font-medium text-gray-900 lg:px-6 px-2 py-4 ">
                            Picture
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 lg:px-6 px-2 py-4 text-left">
                            Price
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900  text-left">
                            Quantity
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 lg:px-6 px-2 py-4 text-left">
                            About
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 lg:px-6 px-2 py-4 text-left">
                            Provider
                        </th>
                    </tr>
                </thead>
                <tbody>


                    {
                        allData.map(car =>
                            <tr key={car._id} className="bg-gray-100 border-b">
                                <td className=" border-r-2 lg:px-6 px-2 py-4 w-4 whitespace-nowrap text-sm font-medium text-gray-900">{++n}</td>

                                <td className=" border-r-2   lg:px-6 px-2 py-4 lg:w-52  "> <img className='rounded-tl-xl rounded-br-xl' src={car.picture} alt="" /> </td>

                                <td className="border-r-2  lg:px-2 lg:w-7 lg:text-sm text-xs text-gray-900 font-light ">
                                    $ {car.price}
                                </td>
                                <td className={`border-r-2 w-2 text-sm text-center font-light ${car.quantity === 0 ? "text-red-600 font-extrabold" : 'text-gray-900'} `}>
                                    {car.quantity}
                                </td>
                                <td className="border-r-2 text-sm lg:block hidden text-gray-900 font-light lg:px-6 px-2 py-4 ">
                                    {car.about}
                                </td>

                                <td className="border-r-2 text-sm lg:hidden text-gray-900 font-light lg:px-6 px-1 py-4 ">
                                    {car.about.slice(0, 100)} <br /> ... <br /> <br /> <Link to={`./${car._id}`} type="button" className=" inline-block px-3 py-2 bg-blue-600 text-white font-sm text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">more</Link>
                                </td>

                                <td className="border-r-2  text-sm text-gray-900 font-light lg:px-6 px-2 py-4 whitespace-nowrap">
                                    {car.supplierName}
                                </td>
                                <td className="border-r-2 flex flex-col items-center text-sm text-gray-900 font-light lg:px-3 w-20 whitespace-nowrap">
                                    <div className='mt-5' >
                                        <button
                                        // onClick={() => HandleDeleteItems(car._id)}
                                        > <img className='w-20' src="https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-line/254000/82-512.png" alt="" /> </button>

                                    </div>

                                    <div>

                                        <Link to={`./${car._id}`} type="button" className=" inline-block px-3 py-2 bg-blue-600 text-white font-sm text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Update</Link>
                                    </div>

                                </td>
                            </tr>

                        )
                    }

                </tbody>
            </table> */}
























        </div>
    );
};

export default MyItems;