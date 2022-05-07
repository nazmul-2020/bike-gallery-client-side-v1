import React from 'react';
import useInventoryItem from '../../../hooks/useInventoryItem';
import AllInventoryinfo from '../AllInventoryInfo/AllInventoryinfo';

const AllInventory = () => {
    const [inventories, setInventories] = useInventoryItem();

    return (
        <div className='my-3 inventory-container container'>
            <h2 className='text-center pt-4 text-success'>Our All Inventory Items</h2>

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