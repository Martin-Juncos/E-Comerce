import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../../Redux/actions';
import axios from "axios";

function UpdateProduct() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const product = useSelector((state)=> state.product)
    
    useEffect(()=>{
        dispatch(getProductById(id))
    },[dispatch,id])

    const [producto, setProducto] = useState({
        title: product.title,
         //description: product.description,
        //  price: "",
        //  discountPercentage: "",
        //  rating: "",
        //  stock: "",
        //  brand: "",
         //category: "",
        // thumbnail: "",
        // images: [],
      });
      

      const handleChange = (e)=>{
        const value = e.target.value
        const property = e.target.name
        setProducto({
            ...producto,
            [property]: value
        })
      }

      const handleSubmit = (e, id)=> {
        e.preventDefault()
        axios.put(`http://localhost:3001/products/${id}`,producto)
      }

  return (
    <div>
        <form onSubmit={(e)=>handleSubmit(e,product.id)}>
            <label htmlFor="title" >Nombre</label>
            <input type="text" name='title' value={producto.title} onChange={handleChange}/>
            <button>Guardar</button>
        </form>
    </div>
  )
}

export default UpdateProduct
//                     Lo primero seria controlar los input de los formularios    

// Completamos todos los estados / completamos los inputs / Desp del Submit, (luego del put) un alert, con todos los datos que hemos actualizado [una ventana con datitos]
  //           >Ir a home<          (boton)           
//


//ventada (modelo de card con el prod o uno nuevo)  errerer