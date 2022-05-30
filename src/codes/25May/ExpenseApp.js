import React from "react";
import ExpenseItems from "./ExpenseItems";

function ExpenseApp() {
  const expenses = [
    {
      id: "1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  
  const filtered = expenses.filter((item) => {
    return (
      item.amount > 200
    )
   })
   console.log(filtered)

  return (
    <div>
      <h1> Let's Started</h1>
     
      <div>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.title} {expense.amount}
          </li>
        ))}
      </div>
      {expenses.map((items) => {
        return (
          <ExpenseItems
            title={items.title}
            amount={items.amount}
            date={items.date}
          />
        );
      })}

      
    </div>
  );
}

export default ExpenseApp;
