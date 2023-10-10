import "./AccountItem.css";
import AccountTags from "../AccountTags/AccountTags";
import { useState } from "react";

function AccountItem(props) {
  let category = props.category;
  // เวลา edit ต้องมี state เก็บว่า edit อยู่มั้ย
  const [isEdit, setIsEdit] = useState(false);
  const [curCategory, setCurCategory] = useState("");
  const [curAmount, setCurAmount] = useState("");
  const [curIsIncome, setCurIsIncome] = useState(false);
  const [curPayment, setCurPayment] = useState("");

  const onClickEdit = () => {
    setIsEdit(true);
    setCurCategory(props.category);
    setCurAmount(props.amount);
    setCurIsIncome(props.isIncome);
    setCurPayment(props.payment);
  };
  const onClickDone = () => {
    const editValue = {
      category: curCategory,
      amount: curAmount,
      isIncome: curIsIncome,
      payment: curPayment,
    };
    props.editHandler(props.id, editValue);
    setIsEdit(false);
  };
  if (isEdit) {
    return (
      <div className="CategoryItem">
        <input
          placeholder="Category"
          className="edit-input"
          value={curCategory}
          onChange={(e) => setCurCategory(e.target.value)}
        />
        <input
          placeholder="จำนวนเงิน"
          min="0"
          max="10000"
          step="10"
          type="number"
          className="edit-input"
          value={curAmount}
          onChange={(e) => setCurAmount(e.target.value)}
        />
        <select
          className="edit-select"
          value={curIsIncome}
          onChange={(e) => setCurIsIncome(e.target.value)}
        >
          <option value="true">รายรับ</option>
          <option value="false">รายจ่าย</option>
        </select>
        <select
          className="edit-select"
          value={curPayment}
          onChange={(e) => setCurPayment(e.target.value)}
        >
          <option value="cash">Cash</option>
          <option value="credit card">Credit card</option>
          <option value="-">-</option>
        </select>
        <button onClick={onClickDone} className="btn btn-success">
          Done
        </button>
        <button onClick={() => setIsEdit(false)} className="btn btn-warning">
          Cancel
        </button>
      </div>
    );
  }
  return (
    <div className="CategoryItem">
      <div>{props.category}</div>
      <div>{props.amount}</div>
      <AccountTags income={props.isIncome} payment={props.payment} />
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

export default AccountItem;