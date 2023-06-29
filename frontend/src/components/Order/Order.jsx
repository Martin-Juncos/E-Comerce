import React from 'react'
import style from './Order.module.css'

function Order() {
  return (
    <div className={style.container} >
        <div className={style.order}>
        <label htmlFor="price">Precio </label>
        <select name="price" id="price">
            <option value="all">All</option>
            <option value="mayor">Mayor</option>
            <option value="menor">Menor</option>
        </select>
        </div>
        <div className={style.order}>
        <label htmlFor="rating">Rating</label>
        <select name="rating" id="rating">
            <option value="all">All</option>
            <option value="mayor">Mayor</option>
            <option value="menor">Menor</option>
        </select>
        </div>
    </div>
  )
}

export default Order