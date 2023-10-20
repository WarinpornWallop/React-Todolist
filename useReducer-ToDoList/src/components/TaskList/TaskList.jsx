import "./TaskList.css";
import Task from "./Task/Task";

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <div className="task-container">
      {tasks.map((task) => (
        <div className="task-item" key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </div>
      ))}
    </div>
  );
}
