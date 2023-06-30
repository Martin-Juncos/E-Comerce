import React, { useState } from "react";
import style from "./CardContainer.module.css";
import Card from "../Card/Card";
import {useSelector} from 'react-redux'
import { data } from "./data";
import Paginado from "../Paginado/Paginado";

function CardsContainer() {

  const nada = useSelector(state => state.allProducts)
  console.log(nada)

  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 6;
  const indexLastProduct = currentPage * productPerPage;
  const indexFirstProduct = indexLastProduct - productPerPage;
  const productsCurrent = data.slice(indexFirstProduct, indexLastProduct);

  return (
    <div >
      <div>
        <Paginado
          productPerPage={productPerPage}
          productsAll={data.length}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <div className={style.card}>
        {productsCurrent.map((prod) => {
          return (
            <Card
              key={prod.id}
              id={prod.id}
              title={prod.title}
              images={prod.images[0]}
              description={prod.description}
              price={prod.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CardsContainer;
