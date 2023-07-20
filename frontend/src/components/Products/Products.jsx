// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { allProducts, deleteProduct } from '../../Redux/actions'



// function Products() {
//     const dispatch = useDispatch()
//     var products = useSelector((state) => state.allProducts)

//     useEffect(() => {
//         dispatch(allProducts())
//         return () => {
//             setProducts([]);
//         }
//     }, [dispatch])

//     var [products, setProducts] = useState([]);



//     const handleDeleteProduct = (id) => {
//         dispatch(deleteProduct(id))
//     }


//     return (
//         <div>
//             {
//                 products.map((prod) => {
//                     return (
//                         <div>
//                             <h1>{prod.title}</h1>
//                             <button>🔄</button>
//                             <button onClick={() => handleDeleteProduct(prod.id)}>❌</button>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }

// export default Products


import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allProducts, deleteProduct } from '../../Redux/actions';
import UpdateProduct from '../UpdateProduct/UpdateProduct';
import { Link } from 'react-router-dom';

function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts);


  useEffect(() => {
    dispatch(allProducts());
    return () => {
    };
  }, [dispatch]);

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  

  return (
    <div>
      {products.map((prod) => (
        <div key={prod.id}>
          <h2>{prod.title}</h2>
          <h4>{prod.description}</h4>
          <h4> ${prod.price}</h4>
          <h4>{prod.discountPercentage}</h4>
          <h4>{prod.rating}</h4>
          <h4>{prod.stock}</h4>
          <h4>{prod.brand}</h4>
          <h4>{prod.category}</h4>
          <Link to={`../updateproduct/${prod.id}`}>
          <button>🔄</button>
          </Link>
          <button onClick={() => handleDeleteProduct(prod.id)}>❌</button>
        </div>
      ))}
    </div>
  );
}

export default Products;