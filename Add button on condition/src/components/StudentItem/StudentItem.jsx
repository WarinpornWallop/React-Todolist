import "./StudentItem.css";
import StudentTags from "../StudentTags/StudentTags";
import { useState } from "react";

function StudentItem(props) {
  let age = props.age;
  // เวลา edit ต้องมี state เก็บว่า edit อยู่มั้ย
  const [isEdit, setIsEdit] = useState(false);
  const [curName, setCurName] = useState("");
  const [curSurname, setCurSurname] = useState("");
  const [curAge, setCurAge] = useState("");
  const [curBType, setCurBType] = useState("");

  const onClickEdit = () => {
    setIsEdit(true);
    setCurAge(age);
    setCurName(props.name);
    setCurSurname(props.surname);
    setCurBType(props.bType);        
  }
  const onClickDone = () => {
    const editValue = {
      name: curName,
      surname: curSurname,
      age: curAge,
      bType: curBType,
    };
    props.editHandler(props.id, editValue);
    setIsEdit(false);
  }
  if (isEdit){
    return (
      <div className="StudentItem">
        <input
          placeholder="Name"
          className="edit-input"
          value={curName}
          onChange={(e) => setCurName(e.target.value)}
        />
        <input
          placeholder="Surname"
          className="edit-input"
          value={curSurname}
          onChange={(e) => setCurSurname(e.target.value)}
        />
        <input
          placeholder="Age"
          min="1"
          max="99"
          step="1"
          type="number"
          className="edit-input"
          value={curAge}
          onChange={(e) => setCurAge(e.target.value)}
        />
        <select
          className="edit-select"
          value={curBType}
          onChange={(e) => setCurBType(e.target.value)}
        >
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="O">O</option>
          <option value="AB">AB</option>
        </select>
        <button onClick={onClickDone} className="btn btn-succss">
          Done
        </button>
        <button onClick={() => setIsEdit(false)} className="btn btn-primary">
          Cancel
        </button>
      </div>
    );
  }
    return (
      <div className="StudentItem">
        <div>{props.name}</div>
        <div>{props.surname}</div>
        <div>{age}</div>
        <StudentTags age={age} />
        <div>{props.bType}</div>
        <button onClick={onClickEdit} className="btn btn-warning">
          Edit
        </button>
        <button
          onClick={() => props.deleteHandler(props.id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    );
}

export default StudentItem;