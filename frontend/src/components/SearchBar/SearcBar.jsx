import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {    allProducts, getProductByName } from '../../Redux/actions';
import style from "./SearcBar.module.css";
function SearcBar() {
  const [input, setInput] = useState('');
  const [flag, setFlag] = useState(true)
  const dispatch = useDispatch();
  const allProduct = useSelector((state) => state.allProducts)

  const handlerInputChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getProductByName(input));
    setInput("")
    setFlag(false)
  };

  const handlerSubmitAll = (event) => {
    event.preventDefault()
 dispatch(allProducts())
    setFlag(true)
  }

  const filteredProducts = allProduct
  

  if (!filteredProducts.length) {
    return (
        <div> De momento, no hay nada para mostrar...</div>
    )
}

  return (
    <div className={style.container}>
            <form >
                <input type="text" value={input} onChange={handlerInputChange} />
                {
                    flag ?
                        <button onClick={handleSubmit} type="submit">Buscar</button> :
                        <button onClick={handlerSubmitAll} >Traer todos!</button>
                }


            </form>
        </div>
  )
}

export default SearcBar