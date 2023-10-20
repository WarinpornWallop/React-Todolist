import { useState } from "react";
import "./AddTask.css";

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState("");
  return (
    <div className="container-add-task">
      <input
        className="input-add-task"
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          onAddTask(text);
        }}
      >
        Add
      </button>
    </div>
  );
}
