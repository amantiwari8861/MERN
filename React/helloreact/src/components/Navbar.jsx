import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <NavLink to={"/"} className={({isActive})=>`navbar-brand }`}  >LOGO</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to={"/home"} className={({isActive})=>`nav-link ${isActive?'active':''}`} end aria-current="page">Home</NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink className={({isActive})=>`nav-link dropdown-toggle`} role="button" data-bs-toggle="dropdown" aria-expanded="false" to={"/service"}>
                Services
              </NavLink>
              <ul className="dropdown-menu">
                <li><NavLink className={({isActive})=>`dropdown-item  ${isActive?'active':''}`} end to="/service1">Service 1</NavLink></li>
                <li><NavLink className={({isActive})=>`dropdown-item  ${isActive?'active':''}`} end to="/service2">Service 2</NavLink></li>
                <li><hr className="dropdown-divider" /></li>
                <li><NavLink className={({isActive})=>`dropdown-item  ${isActive?'active':''}`} end to="/service3">Service 3</NavLink></li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive})=>`nav-link  ${isActive?'active':''}`} to="/about">About us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive})=>`nav-link  ${isActive?'active':''}`} to="/contact">Contact us</NavLink>
            </li>
          </ul>
          <div className="d-flex">
            <NavLink to="login"> <button className="btn btn-primary">Login</button></NavLink>
            <NavLink to="register">  <button className="btn btn-success ms-2 me-2">Register</button></NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
