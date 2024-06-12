import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import { Expenses } from "./types/expenses";

function App() {
  const [expenses, setExpenses] = useState<Expenses[]>([
    { id: 1, charge: "렌트비", amount: 42000 },
    { id: 2, charge: "식비", amount: 24000 },
    { id: 5, charge: "커피값", amount: 5400 },
  ]);
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [edit, setEdit] = useState(false);

  const removeOnClick = (id: number) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };
  const editOnClick = (expense: Expenses) => {
    setEdit(true);
    if (edit) {
      setCharge(expense.charge);
      setAmount(expense.amount);
    }
    console.log(expense);
  };

  const chargeOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCharge(e.target.value);
  };
  const amountOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      const newExpense: Expenses = { id: new Date().getTime(), charge, amount };
      setExpenses((prev) => [...prev, newExpense]);
    } else {
      alert("항목 또는 지출을 다시 작성해 주세요");
    }
    setCharge("");
    setAmount(0);
  };
  const amountTotal = () => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  };
  const allDeleteBtnOnClick = () => {
    setExpenses([]);
  };

  return (
    <main className="main__container">
      <h1>예산 계산기</h1>
      <ExpenseForm
        charge={charge}
        amount={amount}
        chargeOnChange={chargeOnChange}
        amountOnChange={amountOnChange}
        handleSubmit={handleSubmit}
        edit={edit}
      />
      <ExpenseList
        expenses={expenses}
        removeOnClick={removeOnClick}
        editOnClick={editOnClick}
      />
      <div className="bottom__box">
        <button className="all__remove__btn" onClick={allDeleteBtnOnClick}>
          ALL DELETE
        </button>
        <p>
          총지출 : <span>{amountTotal()} 원</span>
        </p>
      </div>
    </main>
  );
}

export default App;
