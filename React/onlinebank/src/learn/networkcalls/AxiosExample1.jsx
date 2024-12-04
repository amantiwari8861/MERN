import { useEffect, useState } from "react"
import Card from "../../components/Card";
import axios from "axios";

// const URL = "https://fakestoreapi.com/products/";
const URL = "http://localhost:3000/products/";
const AxiosExample1 = () => {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      const response = await axios.get(URL);
      const data = await response.data;
      setProducts(data);
    }
    catch (error) {
      // console.log(error);
      console.log(error.message);
    }
    // console.log(data);
  }


  return (
    <div>
      {/* {JSON.stringify(products)} */}
      {/* {product.id} <br />
      {product.title} <br />
      <img src={product.image} alt="" height={"200px"} width={"200px"}/> */}
      <div className="flex gap-5 overflow-x-auto flex-wrap">
        {
          products.length > 0 ? products.map((p, i) => <Card key={i} product={p} />) : "Unable to fetch data from server"
        }
      </div>
    </div>
  )
}

export default AxiosExample1
