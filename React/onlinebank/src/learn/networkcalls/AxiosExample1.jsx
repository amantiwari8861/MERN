import { useEffect, useState } from "react"
import Card from "../../components/Card";
import axios from "axios";
import AddProduct from "../../components/AddProduct";

// const URL = "https://fakestoreapi.com/products/";
const URL = "http://localhost:3000/products/";
const AxiosExample1 = () => {

  const [products, setProducts] = useState([]);
  const [isProductAdded, setProductAdded] = useState(404);
  useEffect(() => {
    getAllProducts();
  }, [products]);

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

  const addProduct = async (data) => {

    const response = await axios.post(URL, data);
    setProductAdded(response.status);
    console.log(response);

  }

  return (
    <div>
      <h1>

        {isProductAdded === 201 ? "Product Added Succesfully!" : "Unable to add product!"}
      </h1>
      <AddProduct addProduct={addProduct} />
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
//https://documenter.getpostman.com/view/20203345/2sAYBa9pfh