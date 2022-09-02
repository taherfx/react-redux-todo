import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo } from './redux'

const ListTodo = () => {
    const todos = useSelector((state) => state.todoReducer.list)
    const dispatch = useDispatch()

    return (
    <div style={{marginTop: '50px'}}>
        {/* {console.log(todos)} */}
        <h2>Todo List</h2>
        <div style={{display: 'block', margin: '10px'}}>
        {
        todos.length ? 
        todos.map(todo => {
            return (
                    <div key={todo.id} style={{border: "1px solid rgba(0, 0, 0, 0.5)", margin: '10px', display: 'flex', justifyContent:'space-between', alignItems: 'center', padding: '10px'}}>
                        <div>
                            <label>{todo.id}</label>
                        </div>
                        <div>
                            <h3>{todo.data.heading}</h3>
                            <p>{todo.data.desc}</p>
                            <p>{todo.data.time}</p>
                        </div>
                        <div>
                            <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete Todo</button>
                        </div>
                    </div>
                    )
                }) : ''
            }
        </div>
    </div>
  )
}

export default ListTodo