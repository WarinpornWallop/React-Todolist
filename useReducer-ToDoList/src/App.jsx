import { useReducer, useState } from "react";
import AddTask from "./components/AddTask/AddTask";
import TaskList from "./components/TaskList/TaskList";
import "./App.css";

function reducer(tasks, action){
  switch (action.type){
    case "added":
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    case "changed":
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    case "deleted" :
      return tasks.filter((t) => t.id !== action.id);
    default:
      throw new Error("Unknown type: " + type);
    
  }
}
export default function TaskApp() {
  // const [tasks, setTasks] = useState(initialTasks);
  const [tasks, dispatch] = useReducer(reducer, initialTasks);
  function handleAddTask(text) {
    dispatch({
      type: "added",
      id: nextId++,
       text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: "changed",
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }

  return (
    <div className="main-container">
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];
