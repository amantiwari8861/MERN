import { useSelector } from "react-redux"
import Card from "../api/Card"

const Cart = () => {
  const products = useSelector(state => state.cart.value)
  return (
    <>
    <h1 className="text-center text-3xl">Cart Products! </h1>
      <div className="flex gap-5 overflow-x-auto flex-wrap align-middle justify-center py-10">
                {products.length > 0
                    ? products.map((p, i) => (
                        <Card
                            key={i}
                            product={p}
                        />
                    ))
                    : "There is no products into the cart"}
            </div>
    </>
  )
}

export default Cart
