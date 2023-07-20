import React, { useState } from 'react';
import {  useNavigate, useParams} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { leaveComment } from '../../Redux/actions';


export default function CommentModal() {
    const { id } = useParams();
    console.log(id)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  
  const [comment, setComment] = useState('');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    dispatch(leaveComment(id, comment));
    //  redirigir a otra página después de dejar el comentario
    navigate("/home")
  };

  return (
    <div>
      <h2>Dejar un comentario</h2>
      <form onSubmit={handleSubmitComment}>
        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="Escribe tu comentario"
        />
        <button type="submit" >Enviar comentario</button>
      </form>
    </div>
  );
}