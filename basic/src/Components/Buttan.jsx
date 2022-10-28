import React from 'react'
import { useState } from 'react'

const Buttan = () => {
    
    const [show,setshow] = useState(true)

  return (
    <div>
        {
        show?
        <div style={{
            backgroundColor:"red"
        }}>React</div>:null
        }
        <div
        style={{
            backgroundColor:"gray"
        }}
        >Node</div>
        <div style={{
            backgroundColor:"yellow"
        }}>Javascript</div>

        <br />

        <button onClick={()=>setshow(true)}>Enable</button>
        <button onClick={()=>setshow(false)}>Disable</button>

    </div>
  )
}

export default Buttan

