import React from 'react'
import style from './Filters.module.css'


function Filters() {
  return (
    <div className={style.container}>
        <div className={style.filter}>
        <label htmlFor="category">Categoria </label>
        <select name="category" id="category">
            <option value="all">All</option>
            <option value="electro">Electro</option>
            <option value="perfumes">Perfumes</option>
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
  )
}

export default Filters