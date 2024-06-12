import React from "react";
import ExpenseItem from "./ExpenseItem";
import { ExpensesListProps } from "../types/expenses";

const ExpenseList: React.FC<ExpensesListProps> = ({
  expenses,
  removeOnClick,
  editOnClick,
}) => {
  return (
    <ul>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          removeOnClick={removeOnClick}
          editOnClick={editOnClick}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
