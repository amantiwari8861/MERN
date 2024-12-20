import { Route, Routes } from "react-router-dom";
import MainContainer from "./api/MainContainer";
import EcomNav from "./components/EcomNav";
import Layout from "./Layout";
import Cart from "./components/Cart";
import SignIn from "./api/SignIn";
import StyledRegister from "./api/Register";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <>
      <EcomNav />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<MainContainer />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<StyledRegister />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App 