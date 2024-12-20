import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
const EcomNav = () => {
  const totalItems = useSelector(state => state.cart.value.length);
  return (
    <header className="flex justify-between items-center px-10 bg-black">
      <div className="left">
        <Link to="products">
          <span>LOGO</span>
        </Link>
      </div>
      <div className="right flex items-center">
        <Link to="cart">
          <img src="https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/orange_shoppictbasket_1484336514.png" alt="" className="max-h-16" />
        </Link>
        <span className="text-3xl">{totalItems}</span>
      </div>
    </header>
  )
}

export default EcomNav
