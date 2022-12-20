import { useEffect, useState } from "react"

const useInventoryItem = () => {

    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('https://bike-gallery-server-side.up.railway.app/item')
            .then(res => res.json())
            .then(data => setInventories(data))
            
    }, [])

    return [inventories, setInventories]
}

export default useInventoryItem;
