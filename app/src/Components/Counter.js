import React, {useState, useEffect} from "react";

export default function Counter (){
    const [counter, setCounter] = useState(0)
   
    useEffect(()=> {
        const timer = setInterval(() => {
            setCounter(prevCounter => prevCounter + 1)
        }, 1000)
        return timer
    },[])

    return(
        <span>{counter}</span>
        
)
}
