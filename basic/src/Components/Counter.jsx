import React from 'react'
import { useState } from 'react'

const Counter = () => {

    const [count,setcount] = useState(0)


  return (
    <div>
      
        <h1>{count}</h1>

        {
            count+1? <button onClick={()=>setcount(count+1)}>Increment</button>:null
        }
          {
            count-1? <button onClick={()=>setcount(count-1)}>Decrement</button>:null
        }
        

        <button onClick={()=>setcount(0)}>Reset</button>


    </div>
  )
}

export default Counter