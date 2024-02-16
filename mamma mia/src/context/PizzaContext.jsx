import { createContext, useContext, useEffect, useState } from 'react'

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {

    // Estados
    const [dataPizza, setDataPizza] = useState([])
    const [total, setTotal] = useState(0)

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
    // Funcion para disminuir desde el boton de carrito
    const restar = (id) => {
        setDataPizza(dataPizza.map((pizza) => {
            if (pizza.id === id) {
                return { ...pizza, cantidad: (pizza.cantidad - 1) }
            }
            return pizza;
        }))
    }

    //funcion para sumar el total 

    const sumarTotal = () => {
        const totalCarrito = dataPizza.reduce((acumulador, valorObjeto)=>{
            return acumulador + (valorObjeto.cantidad * valorObjeto.price)
        },0)
        setTotal(totalCarrito)
    }

    useEffect(()=>{
        sumarTotal()
    },[dataPizza])

    return (
        <PizzaContext.Provider value={{ dataPizza, añadirAlCarrito, sumar, restar, total }}>
            {children}
        </PizzaContext.Provider>
    )

}

export default PizzaProvider
