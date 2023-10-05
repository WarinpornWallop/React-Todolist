import { useState } from "react";
import "./App.css";
import NewStudentItem from "./components/NewStudentItem/NewStudentItem";
import StudentList from "./components/StudentList/StudentList";

let lastId = 4;

function App() {
  const INITIAL_STUDENTS = [
    { id: 1, name: "Samuel", surname: "Jackson", age: 73, bType: "O" },
    { id: 2, name: "Keanu", surname: "Reeves", age: 58, bType: "A" },
    { id: 3, name: "Tom", surname: "Cruise", age: 60, bType: "AB" },
    { id: 4, name: "Johnny", surname: "Depp", age: 59, bType: "A" },
    // { id: 5, name: "AA", surname: "BB", age: 59, bType: "AB" },
  ];
  const [status, setStatus] = useState("Available");
  const [studentList, setStudentList] = useState(INITIAL_STUDENTS);
  const [isShow, setIsShow] = useState(false);
  const clickEventHandler = () => {
    setStatus("Busy");
    console.log("status: ", status);
  };

  const addStudentHandler = (newStudentData) => {
    const newStudent = {
      ...newStudentData,
      id: ++lastId,
    };
    // studentList.unshift(newStudent); ค่าจะไม่เปลี่ยนเพราะ array detect ไม่ได้
    // ทำแบบนี้เพื่อให้เป็น array ตัวใหม
    setStudentList([newStudent, ...studentList]); 
  };
  const deleteHandler = (id) =>{
    const newStudentList = studentList.filter((e) => e.id !== id);
    setStudentList(newStudentList)
  }
  const editHandler = (id, student) =>{
    // Clone new list
    const newStudentList = [...studentList]

    //Find and update the target student
    const idx = studentList.findIndex((e) => e.id === id);
    newStudentList[idx] = {...student}

    //Set State
    setStudentList(newStudentList);
  }

  return (
    <div className="App">
      {isShow ? (
        <NewStudentItem
          setIsShow={setIsShow}
          onAddStudent={addStudentHandler}
        />
      ) : (
        <div className="add-button-container">
          <button onClick={() => setIsShow(true)}>Add New Student</button>
        </div>
      )}

      {/* {objArray.map(e => <div>{e.name}</div>)} */}
      <hr />
      <StudentList
        editHandler={editHandler}
        deleteHandler={deleteHandler}
        studentList={studentList}
      />
      <h3>Status: {status}</h3>
      <button onClick={clickEventHandler}>Click me</button>
    </div>
  );
}

export default App;
