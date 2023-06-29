import React from 'react'
import {useParams} from 'react-router-dom'

function Detail() {
    const { id } = useParams();
    console.log(id)
  return (
    <div>
        <img src="" alt="Img not Found" />
        <h2>title</h2>
        <h3>brand</h3>
        <h6>rating</h6>
        <h6>description</h6>
        <h1>price</h1>


    </div>
  )
}

export default Detail