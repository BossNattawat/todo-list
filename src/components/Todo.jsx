import React from 'react'

export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
    return (
      <div className="Todo">
          <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
          <div className='edit-bin'>
            <img src="./edit.png" alt='edit' className="edit-icon" onClick={() => editTodo(task.id)}/>
            <img src="./bin.png" alt='bin' className="delete-icon" onClick={() => deleteTodo(task.id)}/>
          </div>
      </div>
    )
  }
