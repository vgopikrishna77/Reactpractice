import React, { useState } from 'react'

 export default function UserData() {
    const [name,setName]=useState('')
     function submit(){
        console.log(name);
     }
    

    return (
        <div>
            
            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" />
            <button onClick={submit}> submit</button>
        </div>
        
    )
}


