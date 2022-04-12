import React from 'react'
import { useState } from "react";

export const AddTodo =  ({addTodo}) => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");

  const submit=(e)=>{
    e.preventDefault(e) ;    //prevent page reload
    if(!title || !desc){
      alert("title or description should not be blank!!!!!")
    }
    else{
    addTodo(title,desc);
    settitle("");
    setdesc("");
    }
  }
  return (
    <div className='container'>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Todo Title</label>
          <input type="text" value={title} onChange={(e)=>{settitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
            
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Todo description</label>
          <input type="text" value={desc} onChange={(e)=>{setdesc(e.target.value)}} className="form-control" id="desc"/>
        </div>
        {/* <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div> */}
        <button type="submit" className="btn btn-success btn-primary">Add todo</button>
      </form>
    </div>
  )
}
