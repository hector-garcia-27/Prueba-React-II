import { useParams } from "react-router-dom"

export default function Detalle() {

    const { id } = useParams()


    return (
        <>
            <h1>Detalle</h1>
        </>
    )
}