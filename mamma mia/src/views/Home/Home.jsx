import { useContext } from "react"
import { PizzaContext } from "../../context/PizzaContext"
import { useNavigate } from "react-router-dom"
import './Home.css'

export default function Home() {

    const navigate = useNavigate()
    const { dataPizza, añadirAlCarrito } = useContext(PizzaContext)

    const irADetalles = (id) => { navigate(`/detalle/${id}`) }

    console.log(dataPizza)
    return (
        <div className="menu">
            {dataPizza.map((pizza) => {
                return (
                    <div className="card" key={pizza.id}>
                        <img src={pizza.img} alt="foto de la pizza" />
                        <h1>{pizza.name}</h1>
                        <ul>{pizza.ingredients.map((ingrediente, index) => (
                            <li className="lista" key={index}>{ingrediente}</li>
                        ))}
                        </ul>
                        <p className="precio">$ {pizza.price.toLocaleString('es-ES')}</p>
                        <div className="botones">
                            <button onClick={() => irADetalles(pizza.id)}>Ver mas</button>
                            <button onClick={() => añadirAlCarrito(pizza.id)}>
                                Añadir
                                <img src="/src/assets/carrito.svg" alt="icono carrito" />
                            </button>
                        </div>
                        <p className="precio">En carrito: {pizza.cantidad}</p>
                    </div>
                )
            })}
        </div>
    )
}