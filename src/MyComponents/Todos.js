// import React from 'react'
import {TodoItem} from './TodoItem'


export const Todos = (props) => {
  return (
    <div className="container" style={{ minHeight: "70vh", margin: "60px auto" }}>
      <h3 className="my-3">Todos List</h3> <hr/>
      {props.todos.length===0?( "No Todos to display" ):
        props.todos.map((todo) => {

          return ( <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} /> )
        })}
    </div>
  )
}
export default Todos
