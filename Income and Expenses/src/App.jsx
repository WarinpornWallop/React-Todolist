import { useState } from "react";
import "./App.css";
import NewAccountItem from "./components/NewAccountItem/NewAccountItem";
import AccountList from "./components/AccountList/AccountList";

let lastId = 4;

function App() {
  const INITIAL_ACCOUNT = [
    {
      id: 1,
      category: "เงินประจำสัปดาห์",
      amount: 1000,
      isIncome: true,
      payment: "-",
    },
    {
      id: 2,
      category: "อาหาร",
      amount: 100,
      isIncome: false,
      payment: "credit card",
    },
    {
      id: 3,
      category: "เสื้อผ้า",
      amount: 300,
      isIncome: false,
      payment: "cash",
    },
    {
      id: 4,
      category: "เงินจากถนน",
      amount: 20,
      isIncome: true,
      payment: "-",
    },
    {
      id: 5,
      category: "รองเท้า",
      amount: 1300,
      isIncome: false,
      payment: "cash",
    },
  ];
  const [accountList, setAccountList] = useState(INITIAL_ACCOUNT);
  const [isShow, setIsShow] = useState(false);


  const addAccountHandler = (newAccountData) => {
    const newAccount = {
      ...newAccountData,
      id: ++lastId,
    };

    setAccountList([newAccount, ...accountList]);
  };
  const deleteHandler = (id) =>{
    const newAccountList = accountList.filter((e) => e.id !== id);
    setAccountList(newAccountList);
  }
  const editHandler = (id, account) =>{
    // Clone new list
    const newAccountList = [...accountList];
    const idx = accountList.findIndex((e) => e.id === id);
    newAccountList[idx] = { ...account };

    //Set State
    setAccountList(newAccountList);
  }

  return (
    
    <div className="App">
      {isShow ? (
        <NewAccountItem
          setIsShow={setIsShow}
          onAddAccount={addAccountHandler}
        />
      ) : (
        <div className="add-button-container">
          <button onClick={() => setIsShow(true)}>เพิ่มรายรับ-รายจ่าย</button>
        </div>
      )}
      <hr />
      <AccountList
        editHandler={editHandler}
        deleteHandler={deleteHandler}
        accountList={accountList}
      />
    </div>
  );
}

export default App;
