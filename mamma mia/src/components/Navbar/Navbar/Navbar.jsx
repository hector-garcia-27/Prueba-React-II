import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { PizzaContext } from "../../../context/PizzaContext"
import './navbar.css'

export default function Navbar() {
    const { total } = useContext(PizzaContext)

    const isActiveClass = ({ isActive }) => (isActive ? 'active' : 'inactive')
    return (
        <nav>
            <div className="info">
                <div className="nav1">
                    <img className="iconpizza" src="/src/assets/iconPizza.png" alt="logo pizza" />
                    <p className="baseNavbar">Mamma Mia</p>
                </div>
                <div>
                    <NavLink to='/' className={`baseNavbar ${isActiveClass}`}> Home </NavLink>
                </div>
                <div className="nav2">
                    <img src='/src/assets/carrito.svg' alt="icono carrito" />
                    <NavLink className="baseNavbar" to='/carrito' >
                        <p className={` ${isActiveClass} baseNavbar`}>total: {total}</p>
                    </NavLink>
                </div>
            </div>
            <div className="titulo">
                <h2>Pizzeria Mamma Mia!</h2>
                <p>¡Tenemos las mejores pizzas que podras encontrar!</p>
            </div>
        </nav>
    )
}