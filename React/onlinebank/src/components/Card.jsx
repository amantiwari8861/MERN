import "../App.css";

const Card = ({ product, deleteProduct, editPro }) => {
    const {
        id = "",
        title = "No Title",
        image = "https://via.placeholder.com/200",
        description = "No description available.",
        price = 0,
        rating = { rate: 0 },
    } = product || {};

    return (
        <div className="card card-image-cover min-w-48 shadow-lg">
            <div className="card-body">
                {/* Product Image */}
                <div className="w-full min-h-48">
                    <img
                        src={image}
                        alt={title}
                        className="w-full min-h-48 max-h-56 rounded"
                    />
                </div>

                {/* Product Title */}
                <h2 className="card-header text-lg font-bold mt-3 text-center">
                    {id} : {title}
                </h2>

                {/* Product Description */}
                <p className="text-sm text-gray-600 text-center mt-2">
                    {description.length > 30
                        ? description.substring(0, 30) + "..."
                        : description}
                </p>

                {/* Product Price */}
                <p className="text-center text-lg font-semibold mt-2">
                    <span className="line-through text-red-600">
                        ${(price * 1.15)?.toFixed(2)}
                    </span>{" "}
                    <span className="text-green-600">${price.toFixed(2)}</span>{" "}
                    <span className="text-xs text-gray-500">15% OFF</span>
                </p>

                {/* Product Rating */}
                <p className="text-sm text-yellow-500 text-center mt-2">
                    Rating: {rating.rate} / 5
                </p>

                {/* Action Buttons */}
                <div className="flex justify-around mt-4">
                    <button
                        className="btn btn-primary btn-sm"
                        onClick={() => editPro(product)}
                    >
                        Edit
                    </button>
                    <button
                        className="btn btn-error btn-sm"
                        onClick={() => deleteProduct(id)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
