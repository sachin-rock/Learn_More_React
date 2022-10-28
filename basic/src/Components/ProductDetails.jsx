
// product details page

import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([])


    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(res => setProduct(res))
    }, [id])

    console.log(product)
    

    return (
        <div>
            <h1>{product.title}</h1>
            <img style={{
                width: "200px",
                height: "200px"
            }} src={product.image} alt="" />
            <h3>{product.description}</h3>
            <h3>{product.price}</h3>
        </div>
    )
}

export default ProductDetails
