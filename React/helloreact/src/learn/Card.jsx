
const Card = (props) => {

    let {fal}=props;

    return (
        <div className="col">
            {/* {console.log(props)} */}
            <div className="card h-100 border-5 border-dark">
                <img src="https://hips.hearstapps.com/hmg-prod/images/pomegranate-1558625011.jpg" className="card-img-top" alt="..." height="150px" />
                <div className="card-body">
                    <h5 className="card-title">{fal}</h5>
                    <p className="card-text">{fal} is a very tasty fruit</p>
                </div>
            </div>
        </div>
    )
}

export default Card
