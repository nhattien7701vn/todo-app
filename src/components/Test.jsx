import React, { useEffect, useState } from 'react'

const Test = () => {
  const [counter, setCounter] = useState(0)
  const [name, setName] = useState("Tien")


  useEffect(() => {
    console.log("Component Didmount");
  }, [])

  useEffect(()=>{
    console.log("couter changed", counter)
    return ()=>{
      console.log("updated", counter);
      setName("Tien"+counter)
    }
  }, [counter])
  
  return (
    <div>
      TestComponent
      <h1>{counter}</h1>
      <h1>{name}</h1>
      <button onClick={()=>{setCounter((counter)=> counter +1)}} ></button>
    </div>
  )
}

export default Test
