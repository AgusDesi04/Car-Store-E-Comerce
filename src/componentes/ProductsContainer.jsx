import React, { useEffect, useState, useRef } from 'react';
import Products from './Products';
import { getProducts } from '../actions';
import { Link, useParams } from 'react-router-dom';
import { collection, getFirestore, query, where } from 'firebase/firestore';
import { app } from '../firebaseConfig';
import DropdownButton from './DropdownButton';



function ProductsContainer() {
  const [products, setProducts] = useState([]);

  const db = getFirestore(app);
  const collectionDeProductos = collection(db, 'productos');

  const categoria = useParams().categoria

  const q = categoria ? query(collectionDeProductos, where("categoria", "==", categoria)) : collectionDeProductos



  getProducts(q).then((res) => {setProducts(res)})



  return (
    <div className="bg-[#242424] p-6 min-h-screen">
      <h2 className="text-3xl font-bold text-[#DAA520] border-b-4 border-[#DAA520] pb-2 mb-8">
        Productos
      </h2>
      <DropdownButton/>

      <div className="flex flex-wrap gap-6">
        <Products products={products} />
      </div>
    </div>
  );
}

export default ProductsContainer;