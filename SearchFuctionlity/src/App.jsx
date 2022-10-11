import React, { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  const [data,setData]=useState([])
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState(false)
  const[search,setSearch]=useState('')
 
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>{
      setData(data)
      setLoading(false)
    }
    )
    .catch(err=>{
      setError(err)
      setLoading(false)
    }
    )

    
  },[])

  const handleSearch=(e)=>{
    setSearch(e.target.value)
  }
 





  return (
    <div style={{
      display:'flex',
      flexWrap:'wrap',
    }} >

   
     
       
        
        { 
          loading?<h1>Loading...</h1>:
          error?<h1>Error</h1>:
        
        data.map((item)=>{
            return(
              <div style={{
                
              }}>
                 <input type="text" placeholder="Search" />
        <button onClick={handleSearch}>Search</button>
       
              <p key={item.id}>{item.title}</p>
              <img style={{
                width:'200px',
                height:'200px'
              }}src={item.image} alt={item.title}/>
              </div>
            )
          }
          )}
         

    
    </div>

    
    
  )
}

export default App