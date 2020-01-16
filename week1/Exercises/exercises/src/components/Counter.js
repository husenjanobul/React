import React,{useState} from 'react'
import Button from './Button'
import Count from './Count'

function Counter() {
    const [count, setCount]=useState(0)

    const increment = ()=> setCount(count+1)
    const feedback = ()=>{
        return (count > 10 ? "It's higher than 10!" : "Keep counting...")
    }
    return (
        <div className="counter">
            <p>{feedback()}</p> 
            <Count count={count} />
            <Button increment={increment} />
        </div>
    )
}

export default Counter
