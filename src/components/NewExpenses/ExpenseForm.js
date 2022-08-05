import React,{useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [errorTitle,changeTitleErr]=useState('');
    const [errorPrice,changePriceErr]=useState('');
    const [errorDate,changeDateErr]=useState('');
    const [d_none,changeVisDiv]=useState('');
    // const [userImput,setUserImput]=useState({
    //     enteredTitle:'',
    //     enteredPrice:'',
    //     enteredDate:''
    // })
    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredPrice,setEnteredPrice]=useState('');
    const [enteredDate,setEnteredDate]=useState('');
    
    const titleChangeHandler=(e)=>{
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
        if (e_v.length>4) {
            // changeVisDiv('');
            changeTitleErr('c\'è un errore');
        }else if (e_v.length<=4) {
            // changeVisDiv('d-none');
            changeTitleErr('');
        }
    }
    const priceChangeHandler=(e)=>{
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
        if (e_v.length>4) {
            // changeVisDiv('');
            changePriceErr('c\'è un errore');
        }else if (e_v.length<=4) {
            // changeVisDiv('d-none');
            changePriceErr('');
        }
    }
    const dateChangeHandler=(e)=>{
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
        const notYears=['2022','2021','2020'];
        // if (e_v.contains(...notYears)) {
        //     // changeVisDiv('');
        //     changeDateErr('c\'è un errore');
        // }else if (e_v.length<=4) {
        //     // changeVisDiv('d-none');
        //     changeDateErr('');
        // }
        
        // console.log(notYears.splice(3,9));
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        const expenseData={
            title:enteredTitle,
            price:enteredPrice,
            date:new Date(enteredDate),
        }
        // setEnteredTitle('');
        // console.log(expenseData);
        props.onSaveExpenseData(expenseData);
    }

    // console.log(userImput.enteredTitle);
    // console.log(userImput.enteredPrice);
    // console.log(userImput.enteredDate);
  return (
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
                <div className={d_none}>{errorTitle}</div>
            </div>
            <div className='new-expense__control'>
                <label>Price</label>
                <input type="number" min="0.01" step="0.01" onChange={priceChangeHandler} value={enteredPrice}/>
                <div className={d_none}>{errorPrice}</div>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" min="2016-01-01" max="2022-12-31" onChange={dateChangeHandler} value={enteredDate}/>
                <div className={d_none}>{errorDate}</div>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm