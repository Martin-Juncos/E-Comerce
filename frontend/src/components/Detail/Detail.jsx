import React, { useEffect } from 'react'
import { useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { addToCart, getProductById } from '../../Redux/actions';
import { useNavigate } from 'react-router-dom'
function Detail() {
  
  const navigate = useNavigate()
    const { id } = useParams();
    const dispatch = useDispatch()
    const product = useSelector(state => state.product)
    

    useEffect(() => {
      dispatch(getProductById(id))
    }, [dispatch, id])
    const handlerAddProduct = (e) => {
      e.preventDefault()
      dispatch(addToCart(id))
    }

   const handleLeaveComment = () => {
   navigate(`/products/${id}/comment`)
  }

  return (
    <div>
      <div>
        <img src={product.thumbnail} alt="Img not Found" />
        <h2>{product.title}</h2>
        <h3>{product.brand}</h3>
        <h6>{product.rating}</h6>
        <h6>{product.description}</h6>
        <h1>u$d {product.price}</h1>
        </div>
        <div>
          <button onClick={handlerAddProduct}>Agregar al carrito</button>
          <button onClick={handleLeaveComment} >Dejanos tu comentario !</button>
        </div>
    </div>
  )
}

export default Detail