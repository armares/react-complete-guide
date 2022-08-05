import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
// import ExpenseItem from './components/ExpenseItem';
import ExpenseList from './components/Expenses/ExpenseList';
import Card from './components/UI/Card';
import NewExpense from './components/NewExpenses/NewExpense';

const DUMMY_EXPENSES=[
  {id:'e1',title:'Car insurance',price:700,date:new Date(2022,4,14)},
  {id:'e2',title:'Life insurance',price:300,date:new Date(2021,5,14)},
  {id:'e3',title:'Home insurance',price:800,date:new Date(2021,6,14)},
  {id:'e4',title:'Covid insurance',price:290,date:new Date(2022,7,14)},
  {id:'e5',title:'Labor insurance',price:10,date:new Date(2022,8,14)},
  {id:'e6',title:'Medical insurance',price:130,date:new Date(2021,9,14)},
  {id:'e7',title:'Travel insurance',price:20,date:new Date(2021,10,14)},
];

function App() {
  const [expenses,setExpenses]=useState(DUMMY_EXPENSES);
  // const [filteredYear,setFilteredYear]=useState('2022');
  // const [filteredExpenses,setFilteredExpenses]=useState(expenses);
  const addExpenseHandler=(expense)=>{
    setExpenses(prevExpenses=>{
      return [expense,...prevExpenses];
    });
  }
  // const changeYearHandler=(year)=>{
  //   setFilteredYear(year);
  // }

  // console.log(filteredYear);
  return (
   <div >
      {/* <h2>Let's get started!</h2> */}
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Card className='expenses'>
        <ExpenseList expenses={expenses} pippo='pippo' ></ExpenseList>
      </Card>
     {/* <ExpenseItem title={expenses[0].title} price={expenses[0].price} date={expenses[0].date} id={expenses[0].id}></ExpenseItem>
     <ExpenseItem title={expenses[1].title} price={expenses[1].price} date={expenses[1].date} id={expenses[1].id}></ExpenseItem>
     <ExpenseItem title={expenses[2].title} price={expenses[2].price} date={expenses[2].date} id={expenses[2].id}></ExpenseItem>
     <ExpenseItem title={expenses[3].title} price={expenses[3].price} date={expenses[3].date} id={expenses[3].id}></ExpenseItem> */}
    </div>
  );
}

export default App;
