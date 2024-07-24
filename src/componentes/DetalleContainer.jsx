import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { app } from '../firebaseConfig'; // Asegúrate de importar la configuración de tu Firebase
import ItemCount from './ItemCount';
import { CartContext } from './CartContext';

const db = getFirestore(app);

function DetalleContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {agregarAlCarrito} = useContext(CartContext)
  const [cantidad, setCantidad] = useState(1);


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = doc(db, 'productos', id);
        const productSnap = await getDoc(productRef);

        if (productSnap.exists()) {

          setProduct(productSnap.data());
        } else {
          setError('Producto no encontrado');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <h2>Cargando...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }





  return (
    <div className="  flex items-center  p-4">
      <div className="bg-[#333333] p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-6">Detalle del Producto</h1>
        {product && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex justify-center">
              <img className="w-full h-auto rounded-lg" src={`.${product.imagen}`} alt={product.nombre} />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-semibold text-white mb-4">{product.nombre}</h2>
              <p className="text-2xl text-white mb-4">Precio: <span className="font-bold">${product.precio}</span></p>
              <p className="text-lg text-white">{product.descripcion}</p>
              <ItemCount cantidad={cantidad} setCantidad={setCantidad} agregarAlCarrito={() => {agregarAlCarrito(product, cantidad)}}/>

            </div>
          </div>
        )}
      </div>
    </div>

  );
}

export default DetalleContainer;