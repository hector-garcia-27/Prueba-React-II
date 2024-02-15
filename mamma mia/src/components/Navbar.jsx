import { NavLink } from "react-router-dom"

export default function Navbar() {

    const isActiveClass = ({ isActive }) => (isActive ? 'active' : 'inactive')
    return (
        <nav>
            <div className="nav1">
                <img src="..." alt="logo pizza" />
                <p className="texto">Mamma Mia</p>
            </div>
            <div>
                <NavLink to='/' className={`baseNavbar ${isActiveClass}`}> Home </NavLink>
            </div>
            <div className="nav2">
                <NavLink to='/carrito'>
                    <img src="..." alt="icono carrito" />
                    <p className="texto">total del carrito</p>
                </NavLink>
            </div>
        </nav>
    )
}