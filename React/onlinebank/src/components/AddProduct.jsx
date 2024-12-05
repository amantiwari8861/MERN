import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const URL = "http://localhost:3000/products/";
function AddProduct({addProduct}) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log('Submitted Data:', data);
        addProduct(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '400px', margin: 'auto', padding: "10px" }} className='text-black bg-white'>
            {/* Product ID */}
            <div>
                <label htmlFor="id">Product ID</label>
                <input className='bg-white text-dark mt-3 border'
                    id="id"
                    {...register('id', {
                        required: 'Product ID is required.',
                        pattern: {
                            value: /^[0-9]+$/,
                            message: 'ID must be numeric.',
                        },
                    })}
                />
                {errors.id && <p style={{ color: 'red' }}>{errors.id.message}</p>}
            </div>

            {/* Title */}
            <div>
                <label htmlFor="title">Title</label>
                <input className='bg-white text-dark mt-3 border'
                    id="title"
                    {...register('title', {
                        required: 'Title is required.',
                        minLength: { value: 5, message: 'Title must be at least 5 characters.' },
                    })}
                />
                {errors.title && <p style={{ color: 'red' }}>{errors.title.message}</p>}
            </div>

            {/* Price */}
            <div>
                <label htmlFor="price">Price</label>
                <input className='bg-white text-dark mt-3 border'
                    id="price"
                    type="number"
                    step="0.01"
                    {...register('price', {
                        required: 'Price is required.',
                        min: { value: 0.01, message: 'Price must be greater than 0.' },
                    })}
                />
                {errors.price && <p style={{ color: 'red' }}>{errors.price.message}</p>}
            </div>

            {/* Description */}
            <div>
                <label htmlFor="description">Description</label> <br />
                <textarea className='bg-white text-dark mt-3 border'
                    id="description"
                    {...register('description', {
                        required: 'Description is required.',
                        minLength: { value: 10, message: 'Description must be at least 10 characters.' },
                    })}
                />
                {errors.description && <p style={{ color: 'red' }}>{errors.description.message}</p>}
            </div>

            {/* Category */}
            <div>
                <label htmlFor="category">Category</label>
                <select className='bg-white text-dark mt-3 border'
                    id="category"
                    {...register('category', {
                        required: 'Category is required.',
                    })}
                >
                    <option value="">Select a category</option>
                    <option value="men's clothing">Men's Clothing</option>
                    <option value="women's clothing">Women's Clothing</option>
                    <option value="electronics">Electronics</option>
                    <option value="jewelry">Jewelry</option>
                </select>
                {errors.category && <p style={{ color: 'red' }}>{errors.category.message}</p>}
            </div>

            {/* Image URL */}
            <div>
                <label htmlFor="image">Image URL</label>
                <input className='bg-white text-dark mt-3 border'
                    id="image"
                    type="url"
                    {...register('image', {
                        required: 'Image URL is required.',
                        pattern: {
                            value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i,
                            message: 'Invalid URL format.',
                        },
                    })}
                />
                {errors.image && <p style={{ color: 'red' }}>{errors.image.message}</p>}
            </div>

            {/* Rating */}
            <div>
                <label htmlFor="rate">Rating (Rate)</label>
                <input className='bg-white text-dark mt-3 border'
                    id="rate"
                    type="number"
                    step="0.1"
                    {...register('rating.rate', {
                        required: 'Rating rate is required.',
                        min: { value: 0, message: 'Rate must be at least 0.' },
                        max: { value: 5, message: 'Rate must be at most 5.' },
                    })}
                />
                {errors.rating?.rate && <p style={{ color: 'red' }}>{errors.rating.rate.message}</p>}
            </div>
            <button type="submit" style={{ marginTop: '20px', backgroundColor: "black", color: 'white' }}>Submit</button>
        </form>
    );
}

export default AddProduct
