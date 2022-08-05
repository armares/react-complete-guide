import React,{useState} from 'react';
import ExpensesFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import "./ExpenseList.css";
import "../General/General.css";

const ExpenseList = (props) => {
    // console.log(props.expenses);
    const expenses=props.expenses;
    const [filteredYear,setFilteredYear]=useState('2022');
    const changeYearHandler=(year)=>{
      setFilteredYear(year);
      // props.onChangeYear(year)
    }
    const filteredExpenses=expenses.filter((expense)=>{
      return expense.date.getFullYear().toString()===filteredYear;
    })
    let expensesContent=<div className='c-light'>no expenses found</div>;
    // console.log(expenses);
    if (filteredExpenses.length>0) {
      expensesContent=filteredExpenses.map((e)=>{
        // const ev=e
        return <ExpenseItem key={e.id} id={e.id} date={e.date} title={e.title} price={e.price}/>
    })
    }

  return (
    <div>
        <ExpensesFilter expenses={expenses} onChangeYear={changeYearHandler}/>
        {/* {true && expensesContent} */}
        {expensesContent}
    </div>
  )
}

export default ExpenseList