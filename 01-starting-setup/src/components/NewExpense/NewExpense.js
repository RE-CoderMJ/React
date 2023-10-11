import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsOpen(false);
  };

  const makeItOpenHandler = () => {
    setIsOpen(true);
  };

  const makeItCloseHandler = () => {
    setIsOpen(false);
  };

  return (
    <div className="new-expense">
      {!isOpen && <button onClick={makeItOpenHandler}>Add New Expenses</button>}
      {isOpen && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onClose={makeItCloseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
