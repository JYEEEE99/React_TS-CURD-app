import React from "react";
import "./ExpenseForm.css";
import { ExpensesFormProps } from "../types/expenses";

const ExpenseForm: React.FC<ExpensesFormProps> = ({
  charge,
  amount,
  chargeOnChange,
  amountOnChange,
  handleSubmit,
  edit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="input__container">
        <div className="input__box">
          <label htmlFor="charge">항목</label>
          <input
            type="text"
            id="charge"
            name="charge"
            value={charge}
            placeholder="예) 렌트비"
            onChange={chargeOnChange}
          />
        </div>
        <div className="input__box">
          <label htmlFor="amount">지출</label>
          <input
            type="text"
            id="amount"
            name="amount"
            value={amount}
            placeholder="예) 렌트비"
            onChange={amountOnChange}
          />
        </div>
      </div>
      <button className={edit ? "editing__btn" : "create__btn"}>
        {edit ? "EDITING" : "CREATE"}
      </button>
    </form>
  );
};

export default ExpenseForm;
