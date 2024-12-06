
import '../App.css'
const imgStyle = {
    height: "200px !important"
}
const Card = ({ product ,deleteProduct,editPro }) => {
    return (
        <div className="card card-image-cover min-w-48">
            <div className="card-body">
                <div className="">
                    <img src={product.image} alt="" className='w-full min-h-80 max-h-80' style={imgStyle} height="200px" />
                </div>
                <h2 className="card-header">{product.id +" : "+product.title  }</h2>
                <p className="text-content2 text-xl text-center">{product?.description?.substr(0, 30)}</p>
                <p className="text-content2 text-2xl text-center"><span className='line-through text-red-600'>${(product?.price*1.15).toFixed(2)}</span> <span className='text-green-600'>${product?.price}</span> 15% OFF </p>
                <div className="card-footer px-10">
                <button className="btn-primary btn" onClick={()=>editPro(product)} >edit</button>
                <button className="btn-error btn" onClick={()=>deleteProduct(product.id)}>delete</button>
                </div>
            </div>
        </div>
    )
}

export default Card
