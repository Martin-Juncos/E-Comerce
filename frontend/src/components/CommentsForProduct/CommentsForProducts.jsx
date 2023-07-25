import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCommentsByProduct } from '../../Redux/actions';



export default function CommentsForProduct() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const comments = useSelector(state => state.comments);
    
   
  
    useEffect(() => {
      dispatch(getCommentsByProduct(id));
    }, [dispatch, id]);

    if (!comments) {
        return <div>Cargando comentarios...</div>; // Manejar el caso de comentarios nulos o indefinidos
      }
  
    return (
      <div>
        <h2>Comentarios del Producto</h2>
        {comments.map((comment) => (
          <div key={comment.id}>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
    );
  }
