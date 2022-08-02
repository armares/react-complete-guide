import React from 'react'
import ExpenseDate from './ExpenseDate';
import "./ExpenseItem.css";
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  // const expenseDate=new Date(2022,4,14);
  // const expenseTitle='Car insurance';
  // const expensePrice=290;
  // console.log(props);
  const date=props.date
  return (
    <Card className='expense-item'>
      <ExpenseDate date={date}></ExpenseDate>
      <div className='expense-item__description'>
        <h1>{props.title} {props.id}</h1>
        <div className='expense-item__price'>${props.price}</div>
      </div>
    </Card>
  )
}

export default ExpenseItem