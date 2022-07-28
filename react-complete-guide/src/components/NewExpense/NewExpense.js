import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpensehandler = (enteredExpenseData) => {
    //Define the function to pass the prop
    const expenseData = {
      // destructure the enteredExpenseData from the passed argument
      ...enteredExpenseData,
      id: Math.random().toString(),
      // Set and id to a random number
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpensehandler} />
    </div>
  );
};

export default NewExpense;
