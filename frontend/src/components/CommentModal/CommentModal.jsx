import React, { useState } from 'react';
import { useParams} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { leaveComment } from '../../Redux/actions';


export default function CommentModal() {
    const { id } = useParams();
  const dispatch = useDispatch();
  //const history = useHistory();
  const [comment, setComment] = useState('');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    // llamar a la acción para dejar el comentario 
    dispatch(leaveComment(id, comment));
    //  redirigir a otra página después de dejar el comentario
    //history.push('/');
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
        <button type="submit">Enviar comentario</button>
      </form>
    </div>
  );
}