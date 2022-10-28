

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Product = () => {
    const [products, setProducts] = useState([])
    const navigate = useNavigate()

useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
 .then((res)=>res.json())
 .then((res)=>setProducts(res))
},[])


function hdelete (id){
    const newProducts = products.filter((product)=>product.id !== id)
}

  return (
    <div>
        {
            products.map((product)=>{
                return(
                    <div>
                        <h1>{product.title}</h1>
                        <img style={{
                            width:"200px",
                            height:"200px"
                        }} src={product.image} alt="" />
                        <h3>{product.price}</h3>
                        {/* <button onClick={()=>navigate(`/ProductDetails/${product.id}`)}>View Details</button> */}
                        <button onClick={()=>navigate(`/ProductDetails/${product.id}`)}>View Details</button>
                    </div>
                )
            })
        }

    </div>
  )
}

export default Product


















































// import React from 'react'
// import { useState,useEffect } from 'react'
// import { useNavigate } from "react-router-dom";


// const Product = () => {

//     const [data,setData] = useState([]) 


//     useEffect(()=>{
//         fetch("https://fakestoreapi.com/products")
//         .then(res=>res.json())
//         .then(res=>setData(res))
//     },[])

//     console.log(data)

//     function handdledelete(id){
//         const newData = data.filter((item)=>item.id!==id)
//         setData(newData)
//     }

//     const navigate = useNavigate();

//   return (
//     <div>
//         {
//             data.map((item)=>{
//                 return (
//                     <div key={item.id}>
//                         <h1>{item.title}</h1>
//                         <img style={{
//                             width:"200px",
//                             height:"200px"
//                         }} src={item.image} alt="" />
//                         <button onClick={()=>handdledelete(item.id)}>Delete</button>
//                         <button className="button" onClick={() => {navigate(`./ProductDetails/${item.id}`);}}
//             >More Details</button>

//                     </div>
//                 )
//             })
//         }

//     </div>
//   )
// }

// export default Product