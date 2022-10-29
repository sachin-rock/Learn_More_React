import React from 'react'
import { useState } from 'react'


const Clock = () => {
    const time =new Date().toLocaleTimeString()

const [currentTime,setCurrentTime] =useState(time)

function updatetime(){
    const time =new Date().toLocaleTimeString()
    setCurrentTime(time)
}

setTimeout(updatetime,1000)
  return (
    <div style={{
        fontSize:"100px",
        backgroundColor:"black",
        color:"white",
        justifyContent:"center",
        marginTop:"200px"

    }}>{currentTime}</div>
  )
}

export default Clock