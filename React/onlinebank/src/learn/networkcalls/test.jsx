import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Modal = ({ isOpen, product, addProduct, onClose }) => {
    const [prod, setProduct] = useState({
        id: "",
        title: "",
        image: "",
        price: "",
        description: "",
        category: "",
        rating: { rate: "" },
        ...product,
    });

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    // Sync `product` prop to form state
    useEffect(() => {
        if (product) {
            Object.keys(product).forEach((key) => {
                if (key === "rating") {
                    setValue("rate", product.rating?.rate || "");
                } else {
                    setValue(key, product[key]);
                }
            });
            setProduct(product);
        }
    }, [product, setValue]);

    const onSubmit = (data) => {
        console.log("Submitted Data:", data);
        addProduct({ ...prod, ...data });
        onClose(); // Close modal after submission
    };

    const handleUpdate = (e) => {
        const { name, value } = e.target;
        setProduct((prev) => ({
            ...prev,
            [name]: name === "rate" ? { ...prev.rating, rate: value } : value,
        }));
    };

    return (
        <div className="modal modal-open">
            <div className="modal-box">
                <button
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    onClick={onClose}
                >
                    ✕
                </button>
                <h2 className="text-xl text-center mb-4">Update Product</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    {/* Product ID */}
                    <div>
                        <label htmlFor="id">Product ID</label>
                        <input
                            id="id"
                            name="id"
                            className="input input-bordered w-full"
                            defaultValue={prod.id}
                            onChange={handleUpdate}
                            {...register("id", {
                                required: "Product ID is required.",
                                pattern: {
                                    value: /^[0-9]+$/,
                                    message: "ID must be numeric.",
                                },
                            })}
                        />
                        {errors.id && <p className="text-red-500 text-sm">{errors.id.message}</p>}
                    </div>

                    {/* Title */}
                    <div>
                        <label htmlFor="title">Title</label>
                        <input
                            id="title"
                            name="title"
                            className="input input-bordered w-full"
                            defaultValue={prod.title}
                            onChange={handleUpdate}
                            {...register("title", {
                                required: "Title is required.",
                                minLength: { value: 5, message: "Title must be at least 5 characters." },
                            })}
                        />
                        {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
                    </div>

                    {/* Price */}
                    <div>
                        <label htmlFor="price">Price</label>
                        <input
                            id="price"
                            name="price"
                            type="number"
                            step="0.01"
                            className="input input-bordered w-full"
                            defaultValue={prod.price}
                            onChange={handleUpdate}
                            {...register("price", {
                                required: "Price is required.",
                                min: { value: 0.01, message: "Price must be greater than 0." },
                            })}
                        />
                        {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
                    </div>

                    {/* Rating */}
                    <div>
                        <label htmlFor="rate">Rating</label>
                        <input
                            id="rate"
                            name="rate"
                            type="number"
                            step="0.1"
                            className="input input-bordered w-full"
                            defaultValue={prod.rating.rate || ""}
                            onChange={handleUpdate}
                            {...register("rate", {
                                required: "Rating is required.",
                                min: { value: 0, message: "Rating must be at least 0." },
                                max: { value: 5, message: "Rating must be at most 5." },
                            })}
                        />
                        {errors.rate && <p className="text-red-500 text-sm">{errors.rate.message}</p>}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4">
                        <button type="submit" className="btn btn-primary flex-1">
                            Save
                        </button>
                        <button type="button" className="btn flex-1" onClick={onClose}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;




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