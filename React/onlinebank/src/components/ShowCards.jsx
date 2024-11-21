import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

const ShowCards = () => {

    let [products, setCustomers] = useState([{}]);

    useEffect(() => {
        loadData();
    }, [])


    let loadData = async () => {
        let res = await fetch("Products.json")
        let data = await res.json();
        setCustomers(data);
        console.log(data);
    }
    return (
        <div className="flex gap-5 overflow-x-auto">
            {
                products.map((p, i) => <Card key={i} product={p} />)
            }
        </div>
    )
}

export default ShowCards
