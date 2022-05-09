import React from 'react';
import { Link } from 'react-router-dom';
import useInventoryItem from '../../../hooks/useInventoryItem';
import AllInventoryinfo from '../AllInventoryInfo/AllInventoryinfo';

const AllInventory = () => {
    const [inventories, setInventories] = useInventoryItem();

    return (
        <div className='my-3 inventory-container container'>
            <h2 className='text-center pt-4 text-success'>Our All Inventory Items</h2>
            <Link to='/addItem'>
            <button className='btn btn-outline-dark my-2'>Add new Item</button>
            </Link>


            <div className='row'>
                {
                    inventories.map(inventory => <AllInventoryinfo
                        key={inventory.id}
                        inventory={inventory}
                    ></AllInventoryinfo>)
                }
            </div>
        </div>
    );
};

export default AllInventory;