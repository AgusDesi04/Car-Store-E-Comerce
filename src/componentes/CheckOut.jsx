import { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { app } from '../firebaseConfig';

const db = getFirestore(app);

function CheckoutPage() {
  const { carrito, totalPrice, vaciarCarrito } = useContext(CartContext);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    direccion: '',
    telefono: '',
  });
  const [errors, setErrors] = useState({});
  const [pedidoId, setPedidoId] = useState(null);
  const [showForm, setShowForm] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const compra = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.nombre) newErrors.nombre = 'Nombre es requerido';
    if (!formData.email) newErrors.email = 'Email es requerido';
    if (!formData.direccion) newErrors.direccion = 'Dirección es requerida';
    if (!formData.telefono) newErrors.telefono = 'Teléfono es requerido';
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const pedido = {
      cliente: {
        nombre: formData.nombre,
        email: formData.email,
        direccion: formData.direccion,
        telefono: formData.telefono,
      },
      productos: carrito,
      total: totalPrice,
    };

    try {
      const docRef = await addDoc(collection(db, "pedidos"), pedido);
      setPedidoId(docRef.id);
      vaciarCarrito();
      setFormData({
        nombre: '',
        email: '',
        direccion: '',
        telefono: '',
      });
      setErrors({});
      setShowForm(false);
    } catch (error) {
      console.error("Error al agregar el documento: ", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-[#242424] text-white rounded-lg">
      {pedidoId ? (
        <div className="bg-green-500 p-6 rounded-lg mb-6 text-center text-white">
          <p className="text-xl font-semibold">¡Compra realizada con éxito! Muchas gracias por tu compra.</p>
          <p className="text-lg">Número de pedido: {pedidoId}</p>
          <Link
            to="/"
            className="bg-[#DAA520] hover:bg-[#caa418] text-white font-bold py-2 px-4 rounded-lg mt-4 inline-block"
          >
            Volver a Productos
          </Link>
        </div>
      ) : (
        <>
          {showForm && (
            <>
              <div className="bg-[#333333] p-6 rounded-lg mb-6">
                <h2 className="text-2xl font-semibold mb-4">Resumen de tu Carrito</h2>
                {carrito.length === 0 ? (
                  <p className="text-center text-gray-400">Tu carrito está vacío</p>
                ) : (
                  <>
                    <ul className="list-none p-0 mb-4">
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
                    <div className="flex justify-between items-center">
                      <h4 className="text-lg font-semibold">Precio Total:</h4>
                      <p className="text-xl font-bold">${totalPrice.toFixed(2)}</p>
                    </div>
                  </>
                )}
              </div>

              <form onSubmit={compra} className="bg-[#333333] p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Datos del Cliente</h2>
                <div className="mb-4">
                  <label htmlFor="nombre" className="block text-lg font-medium mb-1">Nombre:</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full p-2 bg-[#444444] border border-gray-600 rounded-lg"
                  />
                  {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>}
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-lg font-medium mb-1">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 bg-[#444444] border border-gray-600 rounded-lg"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div className="mb-4">
                  <label htmlFor="direccion" className="block text-lg font-medium mb-1">Dirección:</label>
                  <input
                    type="text"
                    id="direccion"
                    name="direccion"
                    value={formData.direccion}
                    onChange={handleChange}
                    className="w-full p-2 bg-[#444444] border border-gray-600 rounded-lg"
                  />
                  {errors.direccion && <p className="text-red-500 text-sm mt-1">{errors.direccion}</p>}
                </div>
                <div className="mb-4">
                  <label htmlFor="telefono" className="block text-lg font-medium mb-1">Teléfono:</label>
                  <input
                    type="text"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full p-2 bg-[#444444] border border-gray-600 rounded-lg"
                  />
                  {errors.telefono && <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>}
                </div>
                <button
                  type="submit"
                  className="bg-[#DAA520] hover:bg-[#caa418] text-white font-bold py-2 px-4 rounded-lg"
                >
                  Confirmar Compra
                </button>
              </form>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default CheckoutPage;

