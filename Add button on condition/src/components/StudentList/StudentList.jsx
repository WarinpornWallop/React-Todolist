import { useState } from "react";
import StudentItem from "../StudentItem/StudentItem";
import "./StudentList.css";

export function StudentList(props) {
  const studentList = props.studentList;
  const [curBType, setCurBType] = useState("A");
  const filteredStudents = studentList.filter((s) => s.bType === curBType);

  // if else
  // let contentList = <div>Not Found</div>;
  // if (filteredStudents.length > 0){
  //   contenList = filteredStudents.map((e) => (
  //     <StudentItem
  //       name={e.name}
  //       surname={e.surname}
  //       age={e.age}
  //       bType={e.bType}
  //     />
  //   ));
  // }

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
        {/* ใช้คู่กับ if else ข้างบน */}
        {/* {contenList} */}
        {/* and operator ถ้าเป็นจริงจะแสดงข้างหลัง แต่ถ้าไม่เป็นจริงจะไม่แสดงผลลัพธ์ออกมา */}
        {/* {filteredStudents.length === 0 && <div>Not Found</div>} */}
        {filteredStudents.length === 0 ? (
          <div>Not Found</div>
        ) : (
          filteredStudents.map((e) => (
            <StudentItem
              editHandler={props.editHandler}
              deleteHandler={props.deleteHandler}
              key={e.id}
              id={e.id}
              name={e.name}
              surname={e.surname}
              age={e.age}
              bType={e.bType}
            />
          ))
        )}
      </div>
      <hr />
    </>
  );
}

export default StudentList;
