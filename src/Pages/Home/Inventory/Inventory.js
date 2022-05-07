import React from 'react';
import { Link } from 'react-router-dom';
import useInventoryItem from '../../../hooks/useInventoryItem';
import AllInventory from '../../InventoryInfo/InventoryInfo';
import "./Inventory.css"

const Inventory= () => {
    const [inventories, setInventories] = useInventoryItem();

    return (

        <div className='my-3 inventory-container container'>
            <h2 className='text-center pt-4 text-success'>Our Inventory Items</h2>

            <div className='row'>
                {
                    inventories.slice(0,6).map(inventory => <AllInventory
                        key={inventory.id}
                        inventory={inventory}
                    ></AllInventory>)
                }

            </div>
                <button type="button" className="btn btn-dark mx-auto my-5 d-flex"><Link to='/allInventory'> See All Inventory</Link></button>
        </div>


    );
};

export default Inventory;