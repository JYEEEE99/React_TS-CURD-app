import React from "react";
import { Expenses } from "../types/expenses";
import "./ExpenseItem.css";

interface ExpensesItemProps {
  expense: Expenses;
  removeOnClick: (id: number) => void;
  editOnClick: (expense: Expenses) => void;
}

const ExpenseItem: React.FC<ExpensesItemProps> = ({
  expense,
  removeOnClick,
  editOnClick,
}) => {
  return (
    <li className="item__box">
      <div className="info__box">
        <span>{expense.charge}</span>
        <span>{expense.amount}</span>
      </div>
      <div className="btn__box">
        <button className="edit__btn" onClick={() => editOnClick(expense)}>
          수정
        </button>
        <button
          className="remove__btn"
          onClick={() => removeOnClick(expense.id)}
        >
          삭제
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
