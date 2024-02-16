import { useContext } from "react"
import { PizzaContext } from "../context/PizzaContext"


export default function Carrito() {
    const { dataPizza, sumar, restar, añadirAlCarrito } = useContext(PizzaContext)

    const filterCarrito = dataPizza.filter((element) => element.cantidad > 0)
    console.log(filterCarrito)

    return (
        <div>
            <h3>Detalles del pedido:</h3>
            {filterCarrito?.map((pizzaFilter) => (
                <div key={pizzaFilter.id}>
                    <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <img src={pizzaFilter.img} alt="foto de la pizza" />
                            <p>{pizzaFilter.name}</p>
                        </div>
                        <div className="d-flex">
                            <p>$ {pizzaFilter.price.toLocaleString('es-ES') * pizzaFilter.cantidad.toLocaleString('es-ES')}</p>
                            <button onClick={()=>restar(pizzaFilter.id)}>-</button>
                            <p>{pizzaFilter.cantidad}</p>
                            <button onClick={()=>sumar(pizzaFilter.id)}>+</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}