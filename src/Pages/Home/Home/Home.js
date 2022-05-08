import React from 'react';
import useInventoryItem from '../../../hooks/useInventoryItem';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import InventoryInfo from '../Inventory/Inventory';

const Home = () => {
    const [inventories, setInventories] = useInventoryItem();

    return (
        <div>
            <Banner></Banner>
            <InventoryInfo></InventoryInfo>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;