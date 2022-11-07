import React, { Fragment,useState } from "react";
import classes from './ToDoList.css';
//import "./ToDoList.css";
const ToDoList = (props) =>{
  const [deleteTask, setDeleteTask]= useState([]);

  const deleteHandler = (key) => {
    setDeleteTask(deleteTask.filter( (todo) => todo.key!== key));
  };
    return(
        <Fragment>
       <div className="container-left" >
<div className="app-wrapper-left ">
  <div className="header-left">
        <h1>To Do List</h1>
        < div className={classes.users}>
      <ul>
        {props.tasks.map((task) => (
          <li key={task.id}>
            {task.title} ({task.description})
          </li>
         
        ))}
         <button>edit</button>
         <button onClick={deleteHandler}>delete</button>
      </ul>
    </div>
        </div>
</div>
</div>
        
        </Fragment>
    )
};

export default ToDoList;
    

  