import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

function CartWidget({ ...props }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { cantidadEnCarrito, carrito, totalPrice, vaciarCarrito } = useContext(CartContext)

  return (
    <>
      <Button variant="dark" onClick={handleShow} className="me-2 absolute right-0 bg-[#242424]">
        <img src="/carroCompras.png" alt="Carro de Compras" className='size-16 hover:size-20 duration-150' />
        <span className="absolute -bottom-0 -right-0 bg-[#DAA520] text-white text-xs font-bold rounded-full w-6 h-6 
        flex items-center justify-center">{cantidadEnCarrito()}</span>
      </Button>

      <Offcanvas show={show} onHide={handleClose} {...props} placement='end' keyboard='true' >
        <Offcanvas.Header closeButton className='bg-[#242424] text-white'>
          <Offcanvas.Title>Carro de Compras:</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='bg-[#242424] text-white p-4'>
          {carrito.length === 0 ? (
            <p className="text-center text-gray-400">Tu carrito está vacío</p>
          ) : (
            <ul className="list-none p-0">
              {carrito.map((product, index) => (
                <li key={index} className="flex items-center mb-4">
                  <img
                    src={`.${product.imagen}`}
                    alt={product.nombre}
                    className="w-16 h-16 object-cover rounded-md mr-3"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{product.nombre}</h3>
                    <p className="text-sm text-gray-400">${product.precio}</p>
                    <p className="text-sm text-gray-400">Cantidad: {product.cantidad}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {carrito.length !== 0 && (
            <>
              <div className="flex justify-between items-center mb-4">
                <button
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
                  onClick={vaciarCarrito}
                >
                  Vaciar Carrito
                </button>
              </div>

              <div className="bg-[#333333] p-4 rounded-lg mb-4">
                <h4 className="text-lg font-semibold">Precio Total:</h4>
                <p className="text-xl font-bold">${totalPrice.toFixed(2)}</p>
              </div>

              <div className="flex justify-end">
                <Link
                  to="/checkout"
                  className="bg-[#DAA520] hover:bg-[#caa418] text-white font-bold py-2 px-4 rounded-lg inline-block no-underline"
                  onClick={handleClose}
                >
                  Continuar con la compra
                </Link>
              </div>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CartWidget;
