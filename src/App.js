import React,{useState} from 'react'
import RowComponent from "./RowComponent"

import './App.css'
function App() {
    const [rowCmp,setrowCmp]=useState([{name:"",value:"",id:Math.floor(Math.random() * 1000)}])
    const [cardCmp,setcardCmp]=useState([...rowCmp])
    
    const handleInput=(id,val,type)=>{
        let temp=[...rowCmp]
        let index = temp.findIndex(x => x.id ===id);
        let row=temp[index]
        if(type==="NAME"){
            row.name=val
            temp[index]=row
             setrowCmp(temp)
        }
        else{
            row.value=val
            temp[index]=row
            setrowCmp(temp)
        }
    }
    const handleAddRow=()=>{
        setrowCmp([...rowCmp,{name:"",value:"",id:Math.floor(Math.random()*1000)}])
    }
    const handleRemove = (id) => {
        setrowCmp(rowCmp.filter(item => item.id !== id));
        
      }
    const handleCreate=()=>{
        let temp=[...rowCmp]

        setcardCmp([...cardCmp,temp])
        

    }
    return (
        <div>
        <div className="FormSec">
                {rowCmp.map((i,id)=>{return (
                    <RowComponent name={i.name}
                     id={i.id} 
                     handleRemove={handleRemove}
                     handleInput={handleInput}
                     />
                )})}
                <button onClick={handleAddRow} className="Add">AddRow</button><br />
        </div>
        
        <button onClick={handleCreate} className="creatCard">Create Crad</button>
        <div className="cardholder">
             { cardCmp.map((i,id)=>{
                
                    return (
                       <div className="card">
                             {i.length>0 && i.map((j,id)=>{ 
                            return (
                                <div className="CD">
                                        <p className="data">Name:{j.name} value:{j.value} <span className="CId">ID: {j.id}</span></p>
                                        
                                </div>
                             )})}
                       </div>
                            )
                
             })}
        </div>
        </div>
    )
}

export default App
