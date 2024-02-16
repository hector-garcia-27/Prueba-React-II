import { useContext } from "react"
import { PizzaContext } from "../context/PizzaContext"
import { useNavigate } from "react-router-dom"

export default function Home() {

    const navigate = useNavigate()
    const { dataPizza, añadirAlCarrito } = useContext(PizzaContext)

    const irADetalles = (id) => { navigate(`/detalle/${id}`) }

    const irAlCarrito = () => { }

    console.log(dataPizza)
    return (
        <div>
            {dataPizza.map((pizza) => {
                return (
                    <div className="card" key={pizza.id}>
                        <img src={pizza.img} alt="foto de la pizza" />
                        <h1>{pizza.name}</h1>
                        <ul>{pizza.ingredients.map((ingrediente, index) => (
                            <li key={index}>{ingrediente}</li>
                        ))}
                        </ul>
                        <p className="price">$ {pizza.price.toLocaleString('es-ES')}</p>
                        <div className="botones">
                            <button onClick={() => irADetalles(pizza.id)}>Ver mas</button>
                            <button onClick={()=> añadirAlCarrito(pizza.id)}>
                                <p>Añadir</p>
                                <img src="..." alt="icono carrito" />
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}