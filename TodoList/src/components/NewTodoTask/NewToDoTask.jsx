import React, {useState} from "react";
import "./NewTodoTask.css"

let initialId = 4;

function uniqueId() {
    initialId = initialId + 1;
    return initialId;
}

function NewTodoTask(props){
    const [task, setTask] = useState("")
    const [date, setDate] = useState("");

    const clickHandler = () => {
        const newTodo = {
            task: task,
            dueDate: date,
        }
        props.addNewTodo(newTodo);
        // console.log(newTodo)
        setTask("")
        setDate;("")

    }

    return (
      <div className="add-container">
        <div className="input-container">
          <div>
            <label>Task</label>
            <input
              value={task}
              onChange={(event) => setTask(event.target.value)}
              type="text"
            />
          </div>
          <div>
            <label>Due date</label>
            <input
              value={date}
              onChange={(event) => setDate(event.target.value)}
              type="date"
            />
          </div>
        </div>
        <div className="add-button">
          <button onClick={clickHandler}>Add</button>
        </div>
      </div>
    );
}

export default NewTodoTask;