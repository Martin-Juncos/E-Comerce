import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../../Redux/actions';
import styles from './UpdateProduct.module.css';
import axios from 'axios';

function UpdateProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const product = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  const [producto, setProducto] = useState({
    title: '',
    description: '',
    price: '',
    discountPercentage: '',
    rating: '',
    stock: '',
    brand: '',
    category: '',
    thumbnail: '',
    images: [],
  });

  useEffect(() => {
    setProducto({
      title: product.title,
      description: product.description,
      price: product.price,
      discountPercentage: product.discountPercentage,
      rating: product.rating,
      stock: product.stock,
      brand: product.brand,
      category: product.category,
      thumbnail: product.thumbnail,
      images: product.images,
    });
  }, [product]);

  const handleChange = (e) => {
    const value = e.target.value;
    const property = e.target.name;
    setProducto({
      ...producto,
      [property]: value,
    });
  };

  const handleSubmit = (e, id) => {
    e.preventDefault();
    axios.put(`http://localhost:3001/products/${id}`, producto);
    navigate("/products")
  };

  return (
    <div className={styles.container}> {/* Aplicar el estilo del contenedor principal */}
      <form onSubmit={(e) => handleSubmit(e, product.id)}>
        <label htmlFor="title">Nombre</label>
        <input
          type="text"
          name="title"
          value={producto.title}
          onChange={handleChange}
        />

        <label htmlFor="description">Descripción</label>
        <textarea
          name="description"
          value={producto.description}
          onChange={handleChange}
        />

        <label htmlFor="price">Precio</label>
        <input
          type="number"
          name="price"
          value={producto.price}
          onChange={handleChange}
        />

        <label htmlFor="discountPercentage">Porcentaje de descuento</label>
        <input
          type="number"
          name="discountPercentage"
          value={producto.discountPercentage}
          onChange={handleChange}
        />

        <label htmlFor="rating">Valoración</label>
        <input
          type="number"
          name="rating"
          value={producto.rating}
          onChange={handleChange}
        />

        <label htmlFor="stock">Stock</label>
        <input
          type="number"
          name="stock"
          value={producto.stock}
          onChange={handleChange}
        />

        <label htmlFor="brand">Marca</label>
        <input
          type="text"
          name="brand"
          value={producto.brand}
          onChange={handleChange}
        />

        <label htmlFor="category">Categoría</label>
        <input
          type="text"
          name="category"
          value={producto.category}
          onChange={handleChange}
        />

        <label htmlFor="thumbnail">URL de la imagen del producto</label>
        <input
          type="text"
          name="thumbnail"
          value={producto.thumbnail}
          onChange={handleChange}
        />

        {/* Agregar campos de formulario para las imágenes */}

        <button type="submit" className={styles.submitButton}>Guardar</button> {/* Aplicar el estilo del botón de guardar */}
      </form>
    </div>
  );
}

export default UpdateProduct;



//                     Lo primero seria controlar los input de los formularios    

// Completamos todos los estados / completamos los inputs / Desp del Submit, (luego del put) un alert, con todos los datos que hemos actualizado [una ventana con datitos]
  //           >Ir a home<          (boton)           
//


//ventada (modelo de card con el prod o uno nuevo)  errerer