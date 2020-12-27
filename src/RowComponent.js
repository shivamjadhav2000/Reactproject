import React from 'react'

function RowComponent(props) {
    return (
        <div className="rowComp">
            <input type="text" onChange={(e)=>{props.handleInput(props.id,e.target.value,"NAME")}} placeholder="name" value={props.name}/>
            
            <input type="text" onChange={(e)=>{props.handleInput(props.id,e.target.value,"VALUE")}} placeholder="value" value={props.value} />
            <button onClick={()=>{props.handleRemove(props.id)}} className="remove">X</button>
        </div>
    )
}

export default RowComponent
