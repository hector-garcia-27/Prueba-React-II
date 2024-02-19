import { useParams } from "react-router-dom"
import { useContext } from "react"
import { PizzaContext } from "../../context/PizzaContext"
import './detalle.css'

export default function Detalle() {
    const { dataPizza, añadirAlCarrito } = useContext(PizzaContext)
    const { id } = useParams()

    const pizzaSelected = dataPizza?.find((element) => element.id === id)
    console.log(pizzaSelected)

    return (
        <div className="containerDetalle">
            <div className="detalle">
                <img src={pizzaSelected.img} alt="" />
                <div className="description">
                    <h3 className="nombre">{pizzaSelected.name}</h3>
                    <p>{pizzaSelected.desc}</p>
                    <p><strong>Ingredientes</strong></p>
                    <ul>{pizzaSelected.ingredients.map((ingrediente, index) => (
                        <li className="ingredientes" key={index}>{ingrediente}</li>
                    ))}
                    </ul>
                    <div className="botonCarrito d-flex justify-content-between">
                        <h3>Precio: ${pizzaSelected.price.toLocaleString('es-ES')}</h3>
                        <h5>En carrito: {pizzaSelected.cantidad}</h5>
                    </div>
                    <div className="btncar">
                        <button className="btn" onClick={() => añadirAlCarrito(pizzaSelected.id)}>
                            Añadir
                            <img src="/src/assets/carrito.svg" alt="icono carrito" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}