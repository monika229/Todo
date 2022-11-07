import React, { useState, Fragment } from "react";
import "./AddItem.css";
import select from "react-select";

const AddItem = (props) => {
  const [enteredTitle, setenteredTitle] = useState("");
  const [enteredDescription, setenteredDescription] = useState("");
  const [enteredStatus, setenteredStatus] = useState("todo");
  // const[error, setError]= useState();
  //         //const [enteredDate,setenteredDate] =useState('');
  const titleHandler = (event) => {
    setenteredTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setenteredDescription(event.target.value);
  };

  const statusChangeHandler = (event) => {
    setenteredStatus(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    // if (enteredTitle.trim().length === 0) {
    //   setError({
    //     message: 'Please enter a valid title',
    //   });
    //   return;
    //   if (enteredDescription.trim().length === 0) {
    //     setError({
    //       message: 'Please enter a valid description',
    //     });
    //     return;

    props.onAddUser(enteredTitle, enteredDescription);
    console.log(enteredTitle, enteredDescription);
    console.log(enteredStatus);
    setenteredTitle("");
    setenteredDescription("");
  };

  return (

    <Fragment>
      <div className="backdrop">
        <div className="popup-box">
          <div className=".box">
            <form onSubmit={submitHandler}>
              <div>
                <label htmlFor="title">Task </label>
                <input
                  id="title"
                  type="text"
                  placeholder="Task Name"
                  value={enteredTitle}
                  onChange={titleHandler}
                />
              </div>

              <div>
                <label htmlFor="description">Description </label>
                <input
                  id="description"
                  type="text"
                  placeholder="Task Description"
                  value={enteredDescription}
                  onChange={descriptionChangeHandler}
                />
              </div>

              <div>
                <select
                  onChange={
                    (event) => setenteredStatus(event.target.value)
                  }

                  value={enteredStatus}
                  onChange={statusChangeHandler}
                  
                >
                  <option value="todo"> ToDoList </option>
                  <option value="done"> DoneList </option>
                </select>
              </div>

              <footer>
                <button type="submit" value="Submit">
                  Submit
                </button>
              </footer>

              {/* <button >Button <i className="fa fa-pencil"></i></button> */}
            </form>

            <button className="btn-close" onClick={props.handleClose}>
              x
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AddItem;
