import React from 'react'
import '../General/General.css';
import './ExpenseGraphic.css';
import './ExpenseGraphicS.css';

const ExpenseGraphic = (props) => {
    const classes='col-1 '+'justify-content-center '+props.className;
    const expensesYear=props.expensesYear;
    const month=props.month;
    const expensesMounth=expensesYear.filter((e)=>{
        return e.date.toLocaleString('en-US',{month:'short'})==month;
    });
    const expensesMounthCount=Math.floor((expensesMounth.length/expensesYear.length)*100);
    const barClass='percBar-'+expensesMounthCount;
    const barClasses='content '+barClass;
  return (
    <div className={classes}>
        <div className='bar d-flex'>
            <div className={barClasses}></div>
        </div>
        <div className='fs-1 c-dark larg'>{month}</div>
    </div>
  )
}

export default ExpenseGraphic
