import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar/Navbar'
import Detalle from './views/Detalle/Detalle'
import Carrito from './views/Carrito/Carrito'
import Home from './views/Home/Home'
import PizzaProvider from './context/PizzaContext'
import Footer from './components/Navbar/Footer/Footer';


function App() {

  return (
    <>
      <PizzaProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detalle/:id' element={<Detalle />} />
          <Route path='/carrito' element={<Carrito />} />
        </Routes>
        <Footer />
      </PizzaProvider>
    </>
  )
}

export default App
