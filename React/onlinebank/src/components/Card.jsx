
const Card = ({ product }) => {
    return (
        <div className="card card-image-cover min-w-48 ">
            <div className="card-body">
                {/* {console.log(product.title)} */}
                {/* {console.log(product.title.length())} */}
                {/* <h2 className="card-header">{product.title.length>20 ? product.title.substr(0,20)+"..." : product.title  }</h2> */}
                <p className="text-content2">{product.description.substr(0,30)}</p>
                <div className="card-footer">
                    <button className="btn-secondary btn">${product.price}</button>
                </div>
            </div>
            <img src={product.image} alt="" />
        </div>
    )
}

export default Card
