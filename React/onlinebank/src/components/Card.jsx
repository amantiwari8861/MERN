
import '../App.css'
const imgStyle = {
    height: "200px !important"
}
const Card = ({ product }) => {
    return (
        <div className="card card-image-cover min-w-48">
            <div className="card-body">
                <div className="">
                    <img src={product.image} alt="" className='w-full min-h-80 max-h-80' style={imgStyle} height="200px" />
                </div>
                <h2 className="card-header">{product.id +" : "+product.title  }</h2>
                <p className="text-content2">{product?.description?.substr(0, 30)}</p>
                <div className="card-footer">
                    <button className="btn-secondary btn">${product.price}</button>
                </div>
            </div>
        </div>
    )
}

export default Card
