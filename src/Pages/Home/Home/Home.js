import React from 'react';
import useInventoryItem from '../../../hooks/useInventoryItem';
import Banner from '../Banner/Banner';
import InventoryInfo from '../Inventory/Inventory';

const Home = () => {
    const [inventories, setInventories] = useInventoryItem();

    return (
        <div>
            <Banner></Banner>
            <InventoryInfo></InventoryInfo>
        </div>
    );
};

export default Home;