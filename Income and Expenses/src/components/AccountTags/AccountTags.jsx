import "./AccountTags.css";

function AccountTags(props) {
  let isIncome = props.income;
  let payment= props.payment;
  let paymentClassName = "Tag ";
  

  if (payment == "cash") {
    paymentClassName += "Green";
  }else if (payment == "credit card") {
    paymentClassName += "LightBlue";
  } else {
    paymentClassName += "";
    console.log(payment);
  }


  return (
    <div className="IncomeGroup">
      <div className={isIncome ? "Tag Green" : "Tag Red"}>
        {isIncome ? "รายรับ" : "รายจ่าย"}
      </div>
      <div className={paymentClassName}>{payment}</div>
    </div>
  );
}

export default AccountTags;