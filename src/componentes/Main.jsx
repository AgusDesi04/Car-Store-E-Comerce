import { Route, Router, Routes } from "react-router-dom"
import ProductsContainer from "./ProductsContainer"
import DetalleContainer from "./DetalleContainer"
import Contacto from "./Contacto"
import CheckOut from "./CheckOut"

function Main() {
  return (
    <main className="mt-20 bg-[#242424] min-h-screen">
      <h1 className="text-white">CAR-STORE</h1>

        <Routes>
          <Route path="/" element={<ProductsContainer/>} />
          <Route path="/products"element={<ProductsContainer />} />
          <Route path="/products/:categoria"element={<ProductsContainer />} />
          <Route path="/detalle/:id" element={<DetalleContainer/>}/>
          <Route path="/contacto" element={<Contacto/>} />
          <Route path="/checkout" element={<CheckOut/>}/>
        </Routes>

    </main>

  )
}

export default Main

