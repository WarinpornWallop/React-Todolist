import { useReducer, useState } from "react";
import "./App.css";

function reducer(state, action) {
  if (action.type === "incremented_age") {
    return {
      age: state.age + 1,
    };
  } else if (action.type === "decremented_age") {
    return {
      age: state.age - 1,
    };
  } else if (action.type === "custom_add") {
    return {
      age: state.age + action.age,
    };
  } else if (action.type === "custom_subtract") {
    return {
      age: state.age - action.age,
    };
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {age: 42})
  const[curInt, setCurInt] = useState("");
  return (
    <>
      <button onClick={() => dispatch({ type: "incremented_age" })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decremented_age" })}>
        Decrement
      </button>
      <input value={curInt} onChange={(e) => setCurInt(e.target.value)} />
      <button
        onClick={() => dispatch({ type: "custom_add", age: Number(curInt) })}
      >
        Custom Add
      </button>
      <button
        onClick={() => dispatch({ type: "custom_subtract", age: Number(curInt) })}
      >
        Custom Subtract
      </button>
      <p>Hello! You are {state.age}</p>
    </>
  );
}

export default App;
