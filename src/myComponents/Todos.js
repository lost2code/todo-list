import React from 'react'
import { TodoItem } from './TodoItem'
export const Todos = (props) => {
  return (
    <div className='container'>

<h2 className='text-center my-3'>todos list</h2>
      {props.todos.length == 0 ?
        <div className='text-center' >
          <h5>no todos to display</h5>
        </div> :
          props.todos.map((todo) => {
            return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
          })
        }
       
        




    </div>
  )
}
