import React from 'react'
import Boton from './Button'
function Products({ products }) {
  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
      {products.map((product, index) => {

        return (
          <article
            key={index}
            className="bg-white rounded-xl mb-4 flex flex-col hover:scale-105 transform transition duration-150 shadow-lg"
          >
            <div className="flex-1">
              <h3 className="font-sans underline font-thin pl-6 pt-3">{product.nombre}</h3>
              <h3 className="font-sans pl-6">${product.precio}</h3>
              <img src={product.imagen} alt={product.nombre} className="p-3 w-full h-64 object-contain rounded-b-xl" />
            </div>
            <div className="flex justify-center p-4">
              <Boton
                type="link"
                to={`/detalle/${product._id}`}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Ver Detalles
              </Boton>
            </div>
          </article>


        )
      })}
    </section>
  )
}

export default Products