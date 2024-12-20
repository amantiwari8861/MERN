import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

const Modal = ({ isOpen, product, onClose,editProductCall }) => {
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
    const modelRef = useRef();
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    // Sync `product` prop to form state
    useEffect(() => {
        console.log("modal rerendered");
        modelRef.current.checked = isOpen;
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
    }, [product, setValue,isOpen]);

    const onSubmit = (data) => {
        console.log("Submitted Data:", data);
        data.price=Number(data.price);
        data.rating={"rate":Number(data?.rate)};
        delete data.rate;
        editProductCall({ ...prod, ...data });
        onClose(); // Close modal after submission
    };

    const handleUpdate = (e) => {
        console.log("PROD before:",prod);
        const { name, value } = e.target;
        setProduct((prev) => ({
            ...prev,
            [name]: name === "rate" ? { ...prev.rating, "rate": value } : value,
        }));
        console.log("PROD after:",prod);
        
    };

    if (!isOpen) return null;

    return (
        <>
        
        <input className="modal-state" id="modal-3" type="checkbox" ref={modelRef} />

        <div className="modal">
                <label className="modal-overlay"></label>
            <div className="modal-content flex flex-col gap-5">
                    <label htmlFor="modal-3" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}>✕</label>
                    
                <h2 className="text-xl text-center mb-4">Update Product</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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
        </>
    );
};

export default Modal;