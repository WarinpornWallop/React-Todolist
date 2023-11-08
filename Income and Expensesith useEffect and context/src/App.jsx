import { useEffect, useReducer, useState } from "react";
import "./App.css";
import NewAccountItem from "./components/NewAccountItem/NewAccountItem";
import AccountList from "./components/AccountList/AccountList";
import { HandlerContext } from "./contexts/handler-context";

let lastId = 4;
function reducer(accountList, action) {
  switch (action.type) {
    case "add_account":
      return [...accountList, action.newItem];
    case "delete_account":
      return accountList.filter((e) => e.id !== action.deleteId);
    case "edit_account":
      const newAccountList = [...accountList];
      const index = accountList.findIndex((e) => e.id === action.editId);
      newAccountList[index] = { ...action.account };
      return newAccountList;
    default:
  }
}
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
  
  const [accountList, dispatch] = useReducer(reducer, {}, () => {
    const localAccount = localStorage.getItem("account");
    if (localAccount === null) {
      return INITIAL_ACCOUNT;
    }
    return JSON.parse(localAccount).map((e) => {
      return {
        ...e
      };
    });
  });
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    localStorage.setItem("account", JSON.stringify(accountList));
  }, [accountList]);

  const addAccountHandler = (newAccountData) => {
    const newAccount = {
      ...newAccountData,
      id: ++lastId,
    };
    dispatch({
      type: "add_account",
      newItem: newAccount,
    });
  };
  const deleteHandler = (id) =>{
    dispatch({
      type: "delete_account",
      deleteId: id,
    });
  }
  const editHandler = (id, account) =>{
    dispatch({
      type: "edit_account",
      editId: id,
      account: account,
    });
  }
  return (
    <HandlerContext.Provider
      value={{
        addAccountHandler: addAccountHandler,
        deleteHandler: deleteHandler,
        editHandler: editHandler,
      }}
    >
      <div className="App">
        {isShow ? (
          <NewAccountItem
            setIsShow={setIsShow}
            onAddAccount={addAccountHandler}
          />
        ) : (
          <div>
            <h2 className="my-0">บัญชีรายรับ-รายจ่ายแบบใช้</h2>
            <h3>useEffect, useReducer, Context และ localStorage</h3>
            <div className="add-button-container">
              <button onClick={() => setIsShow(true)}>
                เพิ่มรายรับ-รายจ่าย
              </button>
            </div>
          </div>
        )}
        <hr />
        <AccountList
          editHandler={editHandler}
          deleteHandler={deleteHandler}
          accountList={accountList}
        />
      </div>
    </HandlerContext.Provider>
  );
}

export default App;
