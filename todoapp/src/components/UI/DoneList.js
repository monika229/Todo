import React from "react";
import  "./DoneList.css";

const DoneList = (props) => {
  return (
    <div className="container-right" >
<div className="app-wrapper-right">
  <div className="header-right">
        <h1>Done List</h1>
        < div className={classes.users}>
      <ul>
        {props.tasks.map((task) => (
          <li key={task.id}>
            {task.title} ({task.description})
          </li>
        ))}
      </ul>
    </div>
        </div>
</div>
</div>
  );
};

export default DoneList;
 