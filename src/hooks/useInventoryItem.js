import { useEffect, useState } from "react"

const useInventoryItem = () => {

    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('https://agile-depths-49882.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setInventories(data))
            
    }, [])

    return [inventories, setInventories]
}

export default useInventoryItem;