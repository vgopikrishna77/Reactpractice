import React from 'react'


function Display(props) {
    return (
       <div>
        {
            props.myDisplay.map((e)=>(
                <div>
                    <p>{e.age}</p>
                </div>
            ))
        }

       </div> 
    )
}

export default  Display;
