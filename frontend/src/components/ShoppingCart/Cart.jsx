import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from 'react-redux';

function Cart() {
    const productCard = useSelector(state => state.cart)
  return (
    <div>
        <Link to= '/shop'>
        <button>
        <FontAwesomeIcon icon={faCartShopping} />
        {
            productCard.length ? productCard.length : ''
        }
        </button>
        </Link>
    </div>
  )
}

export default Cart