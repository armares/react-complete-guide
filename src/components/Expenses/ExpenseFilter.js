import React,{useState} from 'react';

import './ExpenseFilter.css';
import ExpenseGraphic from './ExpenseGraphic';

const ExpensesFilter = (props) => {
    const expenses=props.expenses;
    const [year,selectYear]=useState('2022');
    const years=[];
    expenses.forEach((e)=>{
        const e_y=e.date.getFullYear();
        if (e_y && !years.includes(e_y)) {
            years.push(e_y);
        }
    });
    const expensesYear=expenses.filter((e)=>{
        return e.date.getFullYear()==year;
    });
    // console.log(expensesYear);
    const changeYearHandler=(e)=>{
        selectYear(e.target.value);
        props.onChangeYear(e.target.value);
    }
    const months=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={changeYearHandler}>
            {years.map((e)=>{
                return <option  key={e} value={e}>{e}</option>
            })}
        </select>
      </div>
      <div className='expenses-filter__graphic'>
            {months.map((e)=>{
                return <ExpenseGraphic className='mx-auto' key={e} month={e} expensesYear={expensesYear} />
            })}
      </div>
    </div>
  );
};

export default ExpensesFilter;