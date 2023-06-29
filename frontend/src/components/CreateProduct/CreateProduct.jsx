import React, { useState } from "react";
import axios from "axios";

function CreateProduct() {
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
    setProducto({
      ...product,
      [property]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3001/products/", product);
    alert("Producto creado!");
    // setProducto({
    //   title: "",
    //   description: "",
    //   price: "",
    //   discountPercentage: "",
    //   rating: "",
    //   stock: "",
    //   brand: "",
    //   category: "",
    //   thumbnail: "",
    //   images: [],
    // });
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
        <div>
          <button>Crear Producto</button>
        </div>
      </form>
    </div>
  );
}

export default CreateProduct;
