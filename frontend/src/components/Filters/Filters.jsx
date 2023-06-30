import React, { useEffect } from "react";
import style from "./Filters.module.css";
import { allCategories } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";

function Filters() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.allCategories);
  

  useEffect(() => {
    dispatch(allCategories());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <div className={style.filter}>
        <label htmlFor="category">Categoria </label>
        <select name="category" id="category">
          <option value="all">All</option>
          { categories.map((type,index)=> (
            <option value={categories.name} key={index}>
              {type.name}
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
