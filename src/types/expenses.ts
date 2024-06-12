import React from "react";

export interface Expenses {
  id: number;
  charge: string;
  amount: number;
}

export interface ExpensesFormProps {
  charge: string;
  amount: number;
  edit: boolean;
  chargeOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  amountOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface ExpensesListProps {
  expenses: Expenses[];
  removeOnClick: (id: number) => void;
  editOnClick: (expense: Expenses) => void;
}