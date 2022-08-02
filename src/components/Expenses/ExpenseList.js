import React from 'react';
import ExpenseItem from './ExpenseItem';
import "./ExpenseList.css";

const ExpenseList = (props) => {
    // console.log(props.expenses);
    const expenses=props.expenses
    // console.log(expenses);
  return (
    <div>
        {expenses.map((e)=>{
            // const ev=e
            return <ExpenseItem key={e.id} id={e.id} date={e.date} title={e.title} price={e.price}/>
        })}
    </div>
  )
}

export default ExpenseList