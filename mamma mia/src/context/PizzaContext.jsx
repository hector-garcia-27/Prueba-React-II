import { createContext, useEffect, useState } from 'react'

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {

    const [dataPizza, setDataPizza] = useState([])

    const consultaApi = async () => {
        try {
            const apiUrl = '/pizzas.json'
            const res = await fetch(apiUrl)
            const data = await res.json()
            const dataConCantidad = data.map((pizza)=>({...pizza, cantidad: 0}));
            setDataPizza(dataConCantidad)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        consultaApi()
    }, [])

    return (
        <PizzaContext.Provider value={{ dataPizza }}>
            {children}
        </PizzaContext.Provider>
    )

}

export default PizzaProvider
