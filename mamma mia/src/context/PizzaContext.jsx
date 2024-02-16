import { createContext, useEffect, useState } from 'react'

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {

    // Estados
    const [dataPizza, setDataPizza] = useState([])
    const [pizzaCarrito, setPizzaCarrito] = useState([])

    // Peticion a la API
    const consultaApi = async () => {
        try {
            const apiUrl = '/pizzas.json'
            const res = await fetch(apiUrl)
            const data = await res.json()
            const dataConCantidad = data.map((pizza) => ({ ...pizza, cantidad: 0 })); // se agrega el atributo {cantidad=0} a cada objeto dentro del array
            setDataPizza(dataConCantidad)
        } catch (error) {
            console.log(error.message)
        }
    }

    //llamado al cargarse la pagina (1 sola vez)
    useEffect(() => {
        consultaApi()
    }, [])

    //Funcion para aumentar la cantidad en 1 de la pizza que se está añadiendo al carrito
    const añadirAlCarrito = (id) => {
        setDataPizza(dataPizza.map((pizza) => {
            if (pizza.id === id) {
                return { ...pizza, cantidad: (pizza.cantidad + 1) }
            }
            return pizza;
        }))
    }

    //Funcion para aumentar desde el boton del carrito
    const sumar = (id) => {
        setDataPizza(dataPizza.map((pizza) => {
            if (pizza.id === id) {
                return { ...pizza, cantidad: (pizza.cantidad + 1) }
            }
            return pizza;
        }))
    }
    // Function para disminuir desde el boton de carrito
    const restar = (id) => {
        setDataPizza(dataPizza.map((pizza) => {
            if (pizza.id === id) {
                return { ...pizza, cantidad: (pizza.cantidad - 1) }
            }
            return pizza;
        }))
    }

    return (
        <PizzaContext.Provider value={{ dataPizza, añadirAlCarrito, sumar, restar }}>
            {children}
        </PizzaContext.Provider>
    )

}

export default PizzaProvider
