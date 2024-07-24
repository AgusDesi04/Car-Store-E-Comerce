import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();


const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({children}) => {
  const [carrito, setCarrito] = useState(carritoInicial)

  const agregarAlCarrito = (product, cantidad) => {
    const itemAgregado = { ...product, cantidad }

    const nuevoCarrito = [...carrito]

    const estaEnElCarrito = nuevoCarrito.find((product) => product.id === itemAgregado.id)

    if (estaEnElCarrito) {
      estaEnElCarrito.cantidad += cantidad;
      setCarrito(nuevoCarrito)
    } else {
      setCarrito([...carrito, itemAgregado])
    }
  }


  const cantidadEnCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
  }


  const totalPrice = carrito.reduce((total, product) => total + product.precio * product.cantidad, 0);

  const vaciarCarrito = () => {
    setCarrito([])
  }

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }, [carrito])

  return (<CartContext.Provider value={ {carrito, agregarAlCarrito, cantidadEnCarrito , totalPrice, vaciarCarrito} }>
              {children}
          </CartContext.Provider>)
}