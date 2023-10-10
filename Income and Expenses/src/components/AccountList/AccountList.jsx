import { useState } from "react";
import AccountItem from "../AccountItem/AccountItem";
import "../AccountItem/AccountItem.css";

export function AccountList(props) {
  const accountList = props.accountList;
  const [curPayment, setCurPayment] = useState("");
  let filteredAccount = accountList;
  if(curPayment == ""){
    console.log(filteredAccount);
  }else{
    filteredAccount = accountList.filter((s) => s.payment === curPayment);
    console.log(filteredAccount);
  }
  

  return (
    <>
      <div className="selectdiv">
        <label>
          <select
            value={curPayment}
            onChange={(e) => setCurPayment(e.target.value)}
          >
            <option value="cash">Cash</option>
            <option value="credit card">Credit card</option>
            <option value="-">-</option>
            <option value="">All</option>
          </select>
        </label>
      </div>
      <div>
        {/* ใช้คู่กับ if else ข้างบน */}
        {/* {contenList} */}
        {/* and operator ถ้าเป็นจริงจะแสดงข้างหลัง แต่ถ้าไม่เป็นจริงจะไม่แสดงผลลัพธ์ออกมา */}
        {/* {filteredAccount.length === 0 && <div>Not Found</div>} */}
        {filteredAccount.length === 0 ? (
          <div>Not Found</div>
        ) : (
          filteredAccount.map((e) => (
            <AccountItem
              editHandler={props.editHandler}
              deleteHandler={props.deleteHandler}
              key={e.id}
              id={e.id}
              category={e.category}
              amount={e.amount}
              isIncome={e.isIncome}
              payment={e.payment}
            />
          ))
        )}
      </div>
      <hr />
    </>
  );
}

export default AccountList;
