import React, { useState } from "react";
import axios from "axios";

function CreateProduct() {

  function validadora({title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images}) {
    const errors = {}
    if(!title) setErrors(errors.title='ingresar un producto')
    else if(!description) setErrors(errors.description='ingresar una descripcion')
    else if(!/^[0-9]+$/.test(price)) setErrors(errors.price='numero entero')
    else if(!/^[0-9]+$/.test(discountPercentage)) setErrors(errors.discountPercentage='numero entero')
    else if(!/^[0-9]+$/.test(rating)) setErrors(errors.rating='numero entero')  
    else if(!/^[0-9]+$/.test(stock)) setErrors(errors.stock='numero entero') 
    else if(!brand) setErrors(errors.brand='ingresar una brand')
    else if(!category) setErrors(errors.category='ingresar una category')
    else if(!thumbnail) setErrors(errors.thumbnail='ingresar una thumbnail')
    else if(!images) setErrors(errors.images='ingresar una images')
    return errors
  } 
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    price: "",
    discountPercentage: "",
    rating: "",
    stock: "",
    brand: "",
    category: "",
    thumbnail: "",
    images: "",
  }) 

  const [product, setProducto] = useState({
    title: "",
    description: "",
    price: "",
    discountPercentage: "",
    rating: "",
    stock: "",
    brand: "",
    category: "",
    thumbnail: "",
    images: [],
  });
  
  const [inputValue, setInputValue] = useState("");
  const handleAdd = (event) => {
    event.preventDefault();
    setProducto({
      ...product,
      images: [...product.images, inputValue],
    });
    setInputValue("");
  };

  const handlerChange = (event) => {
    const value = event.target.value;
    const property = event.target.name;
    if (property === 'brand' || property === 'category') {
      setProducto({
        ...product,
        [property]: value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
      });
    } else {setProducto({
      ...product,
      [property]: value,
    });
    setErrors(
      validadora({
        ...product,
        [property] : value
      })
    )}
    
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3001/products/", product);
    axios.post("http://localhost:3001/category/", {name: product.category});
    alert("Producto creado!");
    setProducto({
      title: "",
      description: "",
      price: "",
      discountPercentage: "",
      rating: "",
      stock: "",
      brand: "",
      category: "",
      thumbnail: "",
      images: [],
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">title: </label>
          <input
            type="text"
            id="title"
            name="title"
            value={product.title}
            onChange={handlerChange}
          />
          <span>{errors.title && errors.title}</span>
        </div>
        <div>
          <label htmlFor="description">description: </label>
          <input
            type="text"
            id="description"
            name="description"
            value={product.description}
            onChange={handlerChange}
          />
          <span>{errors.description && errors.description}</span>
        </div>
        <div>
          <label htmlFor="price">price: </label>
          <input
            type="text"
            id="price"
            name="price"
            value={product.price}
            onChange={handlerChange}
          />
          <span>{errors.price && errors.price}</span>
        </div>
        <div>
          <label htmlFor="discountPercentage">discountPercentage: </label>
          <input
            type="text"
            id="discountPercentage"
            name="discountPercentage"
            value={product.discountPercentage}
            onChange={handlerChange}
          />
          <span>{errors.discountPercentage && errors.discountPercentage}</span>
        </div>
        <div>
          <label htmlFor="rating">rating: </label>
          <input
            type="text"
            id="rating"
            name="rating"
            value={product.rating}
            onChange={handlerChange}
          />
          <span>{errors.rating && errors.rating}</span>
        </div>
        <div>
          <label htmlFor="stock">stock: </label>
          <input
            type="text"
            id="stock"
            name="stock"
            value={product.stock}
            onChange={handlerChange}
          />
          <span>{errors.stock && errors.stock}</span>
        </div>
        <div>
          <label htmlFor="brand">brand: </label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={product.brand}
            onChange={handlerChange}
          />
          <span>{errors.brand && errors.brand}</span>
        </div>
        <div>
          <label htmlFor="category">category: </label>
          <input
            type="text"
            id="category"
            name="category"
            value={product.category}
            onChange={handlerChange}
          />
          <span>{errors.category && errors.category}</span>
        </div>
        <div>
          <label htmlFor="thumbnail">thumbnail: </label>
          <input
            type="text"
            id="thumbnail"
            name="thumbnail"
            value={product.thumbnail}
            onChange={handlerChange}
          />
          <span>{errors.thumbnail && errors.thumbnail}</span>
        </div>
        <div>
          <label htmlFor="images">images: </label>
          <input
            type="text"
            id="images"
            name="images"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={handleAdd}>Add</button>
        </div>
        <span>{errors.images && errors.images}</span>
        <div>
          {
          <button>Crear Producto</button>
          }          
        </div>
      </form>
    </div>
  );
}

export default CreateProduct;
