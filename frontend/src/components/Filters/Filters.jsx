import React from "react";
import style from "./Filters.module.css";
import { filterCategory, orderProductByBrand } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";

function Filters() {

  const dispatch = useDispatch();
  
  const categories = useSelector((state) => state.allCategories);

  const products = useSelector((state) => state.allProductsCopy)

  const handleCategoryChange = (catName) => {
    dispatch(filterCategory(catName));
  };

  const handleBrandChange = (selectedBrand) => {
    dispatch(orderProductByBrand(selectedBrand))
  }

  return (
    <div className={style.container}>
      <div className={style.filter}>
        <label htmlFor="category">Categoria </label>
        <select name="category" id="category" onChange={(e)=>handleCategoryChange(e.target.value)}>
          <option value="all">All</option>
          { categories.map((categorie)=> (
            <option value={categorie.name} key={categorie.id}>
              {categorie.name}
            </option>
          ))}
        </select>
      </div>
      <div className={style.filter}>
        <label htmlFor="brand">Marca </label>
        <select name="brand" id="brand" onChange={(e)=> handleBrandChange(e.target.value)}>
          <option value="All">All</option>
          { products.map((e, index) => (
            <option value={e.brand}  key={index}>{e.brand}</option>
          )) }
        </select>
      </div>
    </div>
  );
}

export default Filters;

