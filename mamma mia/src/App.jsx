import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Detalle from './views/Detalle'
import Carrito from './views/Carrito'
import Home from './views/Home'
import PizzaProvider from './context/PizzaContext'


function App() {

  return (
    <>
      <Navbar />
      <PizzaProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detalle/:id' element={<Detalle />} />
          <Route path='/carrito' element={<Carrito />} />
        </Routes>
      </PizzaProvider>
    </>
  )
}

export default App