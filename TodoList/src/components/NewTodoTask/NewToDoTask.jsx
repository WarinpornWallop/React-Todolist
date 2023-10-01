import React, {useState} from "react";
import "./NewTodoTask.css"

let initialId = 4;

function uniqueId() {
    initialId = initialId + 1;
    return initialId;
}

function NewTodoTask(props){
    const [task, setTask] = useState("")
    const [task2, setTask2] = useState("");
    const [date, setDate] = useState("");

    const clickHandler = () => {
        const newTodo = {
            task: task,
            dueDate: date,
        }
        props.addNewTodo(newTodo);
        // console.log(newTodo)
        setTask("ss")
        setTask2(task);
        setDate("task")

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
            <label>Task2</label>
            <input
              value={task2}
              onChange={(event) => setTask2(event.target.value)}
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