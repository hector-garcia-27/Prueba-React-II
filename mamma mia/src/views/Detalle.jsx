import { useParams } from "react-router-dom"
import { useContext } from "react"
import { PizzaContext } from "../context/PizzaContext"

export default function Detalle() {
    const { dataPizza, añadirAlCarrito } = useContext(PizzaContext)
    const { id } = useParams()

    const pizzaSelected = dataPizza?.find((element) => element.id === id)
    console.log(pizzaSelected)

    return (
        <>
            <div>
                <img src={pizzaSelected.img} alt="" />
                <div>
                    <h3>{pizzaSelected.name}</h3>
                    <p>{pizzaSelected.desc}</p>
                    <strong><p>Ingrdientes</p></strong>
                    <ul>{pizzaSelected.ingredients.map((ingrediente, index) => (
                        <li key={index}>{ingrediente}</li>
                    ))}
                    </ul>
                    <div>
                        <h3>Precio: ${pizzaSelected.price.toLocaleString('es-ES')}</h3>
                        <button onClick={()=>añadirAlCarrito(pizzaSelected.id)}>Añadir</button>
                    </div>
                </div>
            </div>
        </>
    )
}