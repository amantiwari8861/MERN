import { useEffect, useState } from "react"
import Card from "../../components/Card";
import axios from "axios";
import AddProduct from "../../components/AddProduct";
import Modal from "../../components/Modal";

// const URL = "https://fakestoreapi.com/products/";
const URL = "http://localhost:3000/products/";
const AxiosExample1 = () => {

  const [products, setProducts] = useState([]);
  const [isProductAdded, setProductAdded] = useState(404);
  const [isModalOpen, setModelOpen] = useState(false);
  const [productToEdit,setProductToEdit]=useState(null);

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

  const deleteProduct = async (id) => {
    const response = await axios.delete(URL + id);// delete http://localhost:3000/products/:id
    console.log(response);
    setProducts(products.filter(p => p.id !== id));
    alert("product deleted !");
  }

  const editProduct=(pro)=>{

    setProductToEdit(pro)
    setModelOpen(true);


  }


  return (
    <div>
      <h1>

        {isProductAdded === 201 ? "Product Added Succesfully!" : "Unable to add product!"}
      </h1>
      {isModalOpen && <Modal isOpen={isModalOpen}  product={productToEdit}/>}
      <AddProduct addProduct={addProduct} />
      {/* {JSON.stringify(products)} */}
      {/* {product.id} <br />
      {product.title} <br />
      <img src={product.image} alt="" height={"200px"} width={"200px"}/> */}
      <div className="flex gap-5 overflow-x-auto flex-wrap align-middle justify-center">
        {
          products.length > 0 ? products.map((p, i) => <Card key={i} product={p} deleteProduct={deleteProduct} editPro={editProduct} />) : "Unable to fetch data from server"
        }
      </div>
    </div>
  )
}

export default AxiosExample1
//https://documenter.getpostman.com/view/20203345/2sAYBa9pfh