import { useState } from "react";
import StudentItem from "../StudentItem/StudentItem";
import "./StudentList.css";

export function StudentList(props) {
  const studentList = props.studentList;
  const [curBType, setCurBType] = useState("A");
  const filteredStudents = studentList.filter((s) => s.bType === curBType);
  return (
    <>
      <div className="selectdiv">
        <label>
          <select
            value={curBType}
            onChange={(e) => setCurBType(e.target.value)}
          >
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="O">O</option>
            <option value="AB">AB</option>
          </select>
        </label>
      </div>
      <div>
        {filteredStudents.map((e) => (
          <StudentItem
            name={e.name}
            surname={e.surname}
            age={e.age}
            bType={e.bType}
          />
        ))}
      </div>
      <hr />
    </>
  );
}

export default StudentList;
