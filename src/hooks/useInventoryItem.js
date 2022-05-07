import { useEffect, useState } from "react"

const useInventoryItem = () => {

    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('inventory.json')
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [])

    return [inventories, setInventories]
}

export default useInventoryItem;