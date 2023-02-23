import React, {useState, useEffect} from "react";
import List from './List'
import axios from 'axios'

export default function Search(){
    const [value, setValue] = useState("")
    const [results, setResults] = useState([])
    console.log(results)
useEffect(()=> {
    let timerId
    if (value) {
        timerId = setTimeout( async() => {
            const {data} =  await axios.get("https://en.wikipedia.org/w/api.php", {
                params: {
                    action: "query",
                    list:"search",
                    origin: "*",
                    format: "json",
                    srsearch: value
                }
            })
            setResults(data.query.search)
        }, 1000)
    }

    return ()=> {
        clearTimeout(timerId)
    }
}, [value])

    return (
        <>
            <form className = "ui form">
                <input 
                    type='text' 
                    placeholder= "Serach Wikipedia..."
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </form>

            <List results={results} />
        </>
    )
}