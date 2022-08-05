import React,{useState} from 'react'
import ExpenseDate from './ExpenseDate';
import "./ExpenseItem.css";
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  // const expenseDate=new Date(2022,4,14);
  // const expenseTitle='Car insurance';
  // const expensePrice=290;
  // console.log(props);
  const [title, setTitle]=useState(props.title);
  // const [price, setPrice]=useState(props.price);
  const date=props.date;
  // let title=props.title;
  
  const clickHandler=()=>{
    // console.log(date.toLocaleString('en-US',{month:'long'}));
    // title='PIPPO';
    setTitle('PIPPO');
    // setPrice(40);
    console.log(title);
  };
  return (
    <Card className='expense-item'>
      <ExpenseDate date={date}></ExpenseDate>
      <div className='expense-item__description'>
        <h1>{title} {props.id}</h1>
        <div className='expense-item__price'>${props.price}</div>
      </div>
      <button onClick={clickHandler}>change</button>
    </Card>
  )
}

export default ExpenseItem