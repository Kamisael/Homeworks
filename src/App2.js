import { useState } from "react"

const FirstApp = ({value}) => {

    const [counter, setCounter] = useState(value)
    

    const handleAdd = () => {
      setCounter(counter + 1) 
    }

    const handlerest = () => {
      setCounter(counter - 1) 
    }

    const handlereset = () => {
      setCounter(value) 
    }
  
    return (
      <>
         <h1>Counter</h1>
         <span>{counter}</span>
         <button onClick={()=> handleAdd()}>+1</button>
         <button onClick={()=> handlerest()}>-1</button>
         <button onClick={()=> handlereset()}>Reset</button>
      </>
    )
  }
  
export default FirstApp