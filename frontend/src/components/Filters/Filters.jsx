import React, { useEffect, useState } from "react";
import style from "./Filters.module.css";
import { allCategories, allProducts } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";

function Filters() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.allCategories);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    dispatch(allCategories());
  }, [dispatch]);

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setSelectedCategory(selectedCategory);
    dispatch(allProducts(selectedCategory));
  };
 // digo que cuando apriete una opcion, se deberian mostrar productos cuya categoria sea esa (es lo deseado xD)
//Problema: no estoy pudiendo hacer que mi cards container se modifique :P
  return (
    <div className={style.container}>
      <div className={style.filter}>
        <label htmlFor="category">Categoria </label>
        <select name="category" id="category" onChange={handleCategoryChange}>
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
        <select name="brand" id="brand">
          <option value="all">All</option>
          <option value="Apple">Apple</option>
          <option value="Mega">Mega</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;

