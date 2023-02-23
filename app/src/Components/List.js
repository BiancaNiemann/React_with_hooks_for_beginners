import React, {useState} from "react";

export default function List({ results}){
    const renderedList = results.map(item => {
        return (
            <div key={item.pageid} className="ui segment">
            <h2>
                <a 
                href={`https://en.wikipedia.org?curid=${item.pageid}` } target="_blank"className="Header">{item.title}
                </a>
            </h2>
            <p dangerouslySetInnerHTML={{__html: item.snippet}}></p>
        </div>
        )
    })
    
    return renderedList
}