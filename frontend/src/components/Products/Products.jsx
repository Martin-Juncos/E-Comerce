import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allProducts, deleteProduct } from '../../Redux/actions'



function Products() {
    const dispatch = useDispatch()
    var products = useSelector((state) => state.allProducts)

    useEffect(() => {
        dispatch(allProducts())
        return () => {
            setProducts([]);
        }
    }, [dispatch])

    var [products, setProducts] = useState([]);



    const handleDeleteProduct = (id) => {
        dispatch(deleteProduct(id))
    }


    return (
        <div>
            {
                products.map((prod) => {
                    return (
                        <div>
                            <h1>{prod.title}</h1>
                            <button>🔄</button>
                            <button onClick={() => handleDeleteProduct(prod.id)}>❌</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products