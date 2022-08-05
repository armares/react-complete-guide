import React,{useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const ELadd=<button type='submit'>Add Expense</button>;
    const Elcancel=<button type='submit' onClick={cancelHandler}>Cancel</button>;

    // const [userImput,setUserImput]=useState({
    //     enteredTitle:'',
    //     enteredPrice:'',
    //     enteredDate:''
    // })
    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredPrice,setEnteredPrice]=useState('');
    const [enteredDate,setEnteredDate]=useState('');

    
    // let addNew=<button type='submit'>Add New Expense</button>;
    const [add,setAdd]=useState(ELadd);
    const [cancel,setCancel]=useState(Elcancel);
    
    function titleChangeHandler(e){
        // console.log(e.target.value);
        const e_v=e.target.value;
        // setUserImput({
        //     ...userImput,
        //     enteredTitle:e_v
        // })
        // setUserImput((prevState)=>{
        //     return {...prevState,enteredTitle:e_v};
        // });
        setEnteredTitle(e_v);
    }
    function priceChangeHandler(e){
        // console.log(e.target.value);
        const e_v=e.target.value;
        // setUserImput({
        //     ...userImput,
        //     enteredPrice:e_v
        // })
        // setUserImput((prevState)=>{
        //     return {...prevState,enteredPrice:e_v};
        // });
        setEnteredPrice(e_v);
    }
    function dateChangeHandler(e){
        // console.log(e.target.value);
        const e_v=e.target.value;
        console.log(e_v);
        // setUserImput({
        //     ...userImput,
        //     enteredDate:e_v
        // })
        // setUserImput((prevState)=>{
        //     return {...prevState,enteredDate:e_v};
        // });
        setEnteredDate(e_v);
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        const expenseData={
            title:enteredTitle,
            price:enteredPrice,
            date:new Date(enteredDate),
        }
        props.onSaveExpenseData(expenseData);
    }
    
    function cancelHandler(e){
        e.preventDefault();
        props.onCancelForm(props.add);
    }
    
    
    
    
  return (
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
            </div>
            <div className='new-expense__control'>
                <label>Price</label>
                <input type="number" min="0.01" step="0.01" onChange={priceChangeHandler} value={enteredPrice}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" min="2016-01-01" max="2022-12-31" onChange={dateChangeHandler} value={enteredDate}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            {cancel}
            {add}
        </div>
    </form>
  )
}

export default ExpenseForm