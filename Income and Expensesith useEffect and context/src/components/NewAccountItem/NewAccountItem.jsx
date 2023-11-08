import React, { useState } from "react";
import "./NewAccountItem.css";

const NewAccountItem = (props) => {
   const [currentCategory, setCurrentCategory] = useState("");
   const [currentAmount, setCurrentAmount] = useState("");
   const [currentIsIncome, setCurrentIsIncome] = useState(false);
   const [currentPayment, setCurrentPayment] = useState("cash");
  const catChangeHandler = (event) => {
    setCurrentCategory(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setCurrentAmount(event.target.value);
  };

  const paymentChangeHandler = (event) => {
    setCurrentPayment(event.target.value);
  };

  const incomeChangeHandler = (event) => {
    setCurrentIsIncome(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newAccount = {
      category:currentCategory,
      amount:currentAmount,
      isIncome:currentIsIncome,
      payment:currentPayment,
    };

    props.onAddAccount(newAccount);

    setCurrentCategory("");
    setCurrentAmount("");
    setCurrentIsIncome(false);
    setCurrentPayment("cash");
    props.setIsShow(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="NewAccountContainer">
        <div className="AccountInput">
          <label>Category</label>
          <input
            placeholder="Category"
            className="edit-input"
            value={currentCategory}
            onChange={catChangeHandler}
          />
        </div>
        <div className="AccountInput">
          <label>จำนวนเงิน</label>
          <input
            placeholder="จำนวนเงิน"
            min="0"
            max="10000"
            step="10"
            type="number"
            className="edit-input"
            value={currentAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="AccountInput">
          <label>รับ/จ่าย</label>
          <select
            onChange={incomeChangeHandler}
            value={currentIsIncome ? "รายรับ" : "รายจ่าย"}
          >
            <option value="true">รายรับ</option>
            <option value="false">รายจ่าย</option>
          </select>
        </div>
        <div className="AccountInput">
          <label>การจ่าย</label>
          <select onChange={paymentChangeHandler} value={currentPayment}>
            <option value="cash">Cash</option>
            <option value="credit card">Credit card</option>
            <option value="-">-</option>
          </select>
        </div>
        <hr />
        <div>
          <button className="btn btn-primary" type="submit">
            เพิ่มรายการบัญชี
          </button>
          <button
            className="btn btn-danger"
            onClick={() => props.setIsShow(false)}
            type="button"
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewAccountItem;
