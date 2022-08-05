import React,{useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const ELaddNew=<button type='submit' onClick={addNewHandler}>Add New Expense</button>
  const [addNew,setAddNew]=useState('');
  const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:'e'+Math.random(),
        }
        props.onAddExpense(expenseData);
  }
  function addNewHandler(e){
      e.preventDefault();
      setAddNew('');
  }
  const cancelFormHandler=(add)=>{
    console.log(add);
    setAddNew(add);
  }

  return (
    <div className='new-expense'>
        {!addNew ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} add={ELaddNew} onCancelForm={cancelFormHandler}/>:addNew}
        
    </div>
  )
}

export default NewExpense