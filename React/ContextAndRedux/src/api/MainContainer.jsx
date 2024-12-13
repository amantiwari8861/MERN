import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

const URL = "http://localhost:3000/products/";
const MainContainer = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        getAllProducts();
    }, []);
    const getAllProducts = async () => {
        try {
            const response = await axios.get(URL);
            setProducts(response.data);
        } catch (error) {
            console.log("Error fetching products:", error.message);
        }
    };

  return (
    <>
    <h1 className="text-center text-3xl">List of All Products! </h1>
      <div className="flex gap-5 overflow-x-auto flex-wrap align-middle justify-center py-10">
                {products.length > 0
                    ? products.map((p, i) => (
                        <Card
                            key={i}
                            product={p}
                        />
                    ))
                    : "Unable to fetch data from server"}
            </div>
    </>
  )
}

export default MainContainer

// json-server -> fake backend
// cd db
// json-server products.json