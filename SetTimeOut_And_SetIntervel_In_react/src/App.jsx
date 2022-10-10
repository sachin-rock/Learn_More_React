
import './App.css';
import {useState,useEffect} from "react"




function App() {
  const [Name,SetName]=useState("")
  const [age,setAge]=useState("")

  useEffect(()=>{
    setTimeout(() => {
       SetName("Sachin")
       setAge("25")
    }, 3000);

    setInterval(()=>{
    alert("setIntervel Learn")
    },5000)
  })
  return (
    <div className="App">

      <h1>{Name}</h1>
      <h1>{age}</h1>
     
    </div>
  );
}

export default App;
