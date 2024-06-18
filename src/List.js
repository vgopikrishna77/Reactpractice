import React from 'react'
import { useState } from 'react';
import Display from './Display';

function List() {
    const [name,setName]=useState([
        {
            name:"gopi",
            age:20,
            year:2024
        },
        {
            name:"gopi",
            age:20,
            year:2024
        },
        {
            name:"gopi",
            age:20,
            year:2024
        }
    ])
    return (
        <div>
            <Display myDisplay={name}/>
           
            {/* {
                name.map((e)=>(
                    <div>
                        <p> {e.name}</p>
                        <p>{e.age}</p>
                        <p>{e.year}</p>
                    </div>
                ))
            } */}
        </div>
        
    )
}

export default List;
