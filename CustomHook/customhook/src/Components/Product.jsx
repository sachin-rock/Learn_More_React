import React from 'react'
import useFetch from '../hooks/useFetch'
import {product_api} from '../constants/apiUrls'

const Product = () => {
   
const { data, error } = useFetch(product_api);

if (error) return <p>Error: {error}</p>;

console.log(data)



  return (
    <div>Product</div>
  )
}

export default Product