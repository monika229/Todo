import React, { Fragment, useState } from "react";
import "./App.css";
import AddItem from "./components/AddItem";
import DoneList from "./components/UI/DoneList";
import ToDoList from "./components/UI/ToDoList";
import SearchFun from "./components/UI/SearchFun";

const App = () => {
  const [TasksList, setTasksList] = useState([]);
  const [newTask, setNewTask] = useState(false);
  const addTaskButtonHandler = () => {
    
    setNewTask(!newTask);
    //setNewTask(true);
  };
  

  const addTaskHandler = (newTitle, newDescription, newStatus) => {
    setTasksList((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          title: newTitle,
          description: newDescription,
          status: newStatus,
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <Fragment>
      <SearchFun />

      <div>
        <button className="btn btn" onClick={addTaskButtonHandler}>
          Add Task
        </button>

        {newTask && (
          <AddItem
            onAddUser={addTaskHandler}
            handleClose={addTaskButtonHandler}
          />
        )}
      </div>
      if (enteredStatus === "todo" ) {
        <ToDoList tasks={TasksList} />
      }
      if (enteredStatus === "done" ) {
        <DoneList tasks={TasksList} />
      }
    
      
      
    </Fragment>
  );
};

export default App;
