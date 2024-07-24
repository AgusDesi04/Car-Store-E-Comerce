import React, { useState } from 'react';

function ItemCount({cantidad , setCantidad , agregarAlCarrito}) {



  return (
    <div>
      <div className="inline-flex items-center rounded-lg overflow-hidden bg-[#DAA520] w-[130px] h-[65px] hover:bg-[#F4A300]">
        <button className="text-white bg-black p-3 rounded-l-lg hover:bg-gray-800 transition duration-150 ml-1"
          onClick={() => { setCantidad(cantidad - 1) }}> - </button>
        <div className="flex items-center bg-[#DAA520]">
          <p className="text-white text-lg px-3 py-1">{cantidad}</p>
        </div>
        <button className="text-white bg-black p-3 rounded-r-lg hover:bg-gray-800 transition duration-150"
          onClick={() => { setCantidad(cantidad + 1) }}> + </button>
      </div>
      <button className='bg-[#DAA520] ml-4 p-2 rounded-md text-lg hover:bg-[#F4A300]' onClick={agregarAlCarrito}> agregar al carrito</button>
    </div>






  )
}

export default ItemCount