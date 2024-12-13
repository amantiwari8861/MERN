import { useEffect, useState } from "react";
import Card from "../../components/Card";
import axios from "axios";
import AddProduct from "../../components/AddProduct";
import Modal from "../../components/Modal";

const URL = "http://localhost:3000/products/";

const AxiosExample1 = () => {
    const [products, setProducts] = useState([]);
    const [isProductAdded, setProductAdded] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    const [productToEdit, setProductToEdit] = useState(null);
    const [openAddProduct,setOpenAddProduct]=useState(false);
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
    const addProduct = async (data) => {
        try {
            const response = await axios.post(URL, data);
            setProductAdded(response.status === 201);
            getAllProducts(); // Refresh product list
        } catch (error) {
            console.log("Error adding product:", error.message);
        }
        setOpenAddProduct(false);
    };
    const deleteProduct = async (id) => {
        try {
            await axios.delete(`${URL}${id}`);
            setProducts(products.filter((p) => p.id !== id));
            alert("Product deleted!");
        } catch (error) {
            console.log("Error deleting product:", error.message);
        }
    };
    const editProduct =async (product) => {
        setProductToEdit(product);
        setModalOpen(true);
        console.log("Editing ", product, isModalOpen);
    };
    const editProductCall=async (product)=>{
        try{
        console.log("editing the product",product);
        const response=axios.put(`${URL}${product.id}`, product);
        console.log(response);
        alert("product edited succesfully!");
        getAllProducts();
        }
        catch (error) {
            console.log("Error editing products:", error.message);
        }
    }
    return (
        <div>
            <h1 className="text-center text-3xl">{isProductAdded ? "Product Added Successfully!" : "Manage Products"}</h1>
            {console.log("modal open ? ", isModalOpen)}
            {isModalOpen && <Modal
                isOpen={isModalOpen}
                product={productToEdit}
                editProductCall={editProductCall}
                onClose={() => setModalOpen(false)}
            />
            }
            <button className="btn btn-primary" onClick={()=>setOpenAddProduct(true)}>Add Product</button>
            { openAddProduct ? <AddProduct addProduct={addProduct} /> : " "}
            <div className="flex gap-5 overflow-x-auto flex-wrap align-middle justify-center py-10">
                {products.length > 0
                    ? products.map((p, i) => (
                        <Card
                            key={i}
                            product={p}
                            deleteProduct={deleteProduct}
                            editPro={editProduct}
                        />
                    ))
                    : "Unable to fetch data from server"}
            </div>
        </div>
    );
};
export default AxiosExample1;