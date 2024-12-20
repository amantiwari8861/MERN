import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import Modal from "./Modal";

const URL = import.meta.env.VITE_PRODUCTS_URL;
const MainContainer = () => {

    const [products, setProducts] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [productToEdit, setProductToEdit] = useState(null);
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
    const deleteProduct = async (id) => {
        try {
            await axios.delete(`${URL}${id}`);
            setProducts(products.filter((p) => p.id !== id));
            alert("Product deleted!");
        } catch (error) {
            console.log("Error deleting product:", error.message);
        }
    };
    const editProduct = async (product) => {
        setProductToEdit(product);
        setModalOpen(true);
        console.log("Editing ", product, isModalOpen);
    };
    const editProductCall = async (product) => {
        try {
            console.log("editing the product", product);
            const response = axios.put(`${URL}${product.id}`, product);
            console.log(response);
            alert("product edited succesfully!");
            getAllProducts();
        }
        catch (error) {
            console.log("Error editing products:", error.message);
        }
    }

    return (
        <>
            <h1 className="text-center text-3xl">Welcome {JSON.parse(sessionStorage.getItem("loggedInUser"))?.email || "Sir"}</h1>
            <h1 className="text-center text-3xl">List of All Products! </h1>
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
            {isModalOpen && <Modal
                isOpen={isModalOpen}
                product={productToEdit}
                editProductCall={editProductCall}
                onClose={() => setModalOpen(false)}
            />
            }
        </>
    )
}

export default MainContainer

// json-server -> fake backend
// cd db
// json-server products.json --port=5000