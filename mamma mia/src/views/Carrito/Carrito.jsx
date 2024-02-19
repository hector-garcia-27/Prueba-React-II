import { useContext } from "react"
import { PizzaContext } from "../../context/PizzaContext"
import './carrito.css'


export default function Carrito() {
    const { dataPizza, añadirAlCarrito, restar, total } = useContext(PizzaContext)

    const filterCarrito = dataPizza.filter((element) => element.cantidad > 0)
    console.log(filterCarrito)

    return (
        <div className="containerCarrito">
            <h3 className="pedido">Detalles del pedido:</h3>
            {filterCarrito?.map((pizzaFilter) => (
                <div className="tab" key={pizzaFilter.id}>
                    <div className="tabla">
                        <div className="inicio d-flex">
                            <img className="foto" src={pizzaFilter.img} alt="foto de la pizza" />
                            <h5>{pizzaFilter.name}</h5>
                        </div>
                        <div className="contador d-flex">
                            <h5 className="precioCarrito">$ {pizzaFilter.price.toLocaleString('es-ES') * pizzaFilter.cantidad.toLocaleString('es-ES')}</h5>
                            <button className="botonCarrito" onClick={() => restar(pizzaFilter.id)}>-</button>
                            <h5 className="precioCarrito">{pizzaFilter.cantidad}</h5>
                            <button className="botonCarrito" onClick={() => añadirAlCarrito(pizzaFilter.id)}>+</button>
                        </div>
                    </div>
                </div>
            ))}
            <div className="total">
                <h3> Total del pedido: {total}</h3>
            </div>
        </div>
    )
}