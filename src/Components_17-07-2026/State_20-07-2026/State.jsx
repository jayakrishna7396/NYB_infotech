import React, { useState } from 'react'

const State = () => {
    const [count,setCount]=useState(0)
  return (
    <div>State  
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}> increase </button>
    </div>

  )
}

export default State