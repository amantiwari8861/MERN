import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

const Modal = ({ isOpen, product, addProduct }) => {
    const [isModalOpen, setModelOpen] = useState(isOpen);
    const [prod, setProduct] = useState({
        id: "",
        title: "",
        image: "",
        price: "",
        rating: { rate: "" },
        ...product,
    });

    const modelRef = useRef();

    useEffect(() => {        
        setModelOpen(isOpen);
        modelRef.current.checked = isModalOpen;
    }, [isOpen]);

    useEffect(() => {
        setProduct((prev) => ({
            ...prev,
            ...product,
            rating: { ...prev.rating, ...product?.rating },
        }));
    }, [product]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = () => {
        console.log("Submitted Data:", prod);
        addProduct(prod);
    };

    const handleUpdate = (e) => {
        const { id, value } = e.target;

        if (id === "rate") {
            setProduct((prev) => ({
                ...prev,
                rating: { ...prev.rating, rate: value },
            }));
        } else {
            setProduct((prev) => ({
                ...prev,
                [id]: value,
            }));
        }
    };

    return (
        <div>
            <input className="modal-state" id="modal-3" type="checkbox" ref={modelRef} />
            <div className="modal">
                <label className="modal-overlay"></label>
                <div className="modal-content flex flex-col gap-5">
                    <label htmlFor="modal-3" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => setModelOpen(false)}>✕</label>
                    <h2 className="text-xl text-center">Modal title 3</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="text-black bg-white">
                        {/* Input fields */}
                        {/* (Add fields like in your original code) */}

                        <div className="flex gap-3">
                            <button className="btn btn-primary btn-block" type="submit">Update</button>
                            <button className="btn btn-block" onClick={() => setModelOpen(false)}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;
