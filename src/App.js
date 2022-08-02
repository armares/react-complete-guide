import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';


function App() {
  const expenses=[
    {id:'e1',title:'Car insurance',price:290,date:new Date(2022,4,14)},
    {id:'e2',title:'Car insurance',price:290,date:new Date(2022,5,14)},
    {id:'e3',title:'Car insurance',price:290,date:new Date(2022,6,14)},
    {id:'e4',title:'Car insurance',price:290,date:new Date(2022,7,14)},
    {id:'e5',title:'Car insurance',price:290,date:new Date(2022,8,14)},
    {id:'e6',title:'Car insurance',price:290,date:new Date(2022,9,14)},
    {id:'e7',title:'Car insurance',price:290,date:new Date(2022,10,14)},
  ];
  return (
   <div >
     <ExpenseItem title={expenses[0].title} price={expenses[0].price} date={expenses[0].date} id={expenses[0].id}></ExpenseItem>
     <ExpenseItem title={expenses[1].title} price={expenses[1].price} date={expenses[1].date} id={expenses[1].id}></ExpenseItem>
     <ExpenseItem title={expenses[2].title} price={expenses[2].price} date={expenses[2].date} id={expenses[2].id}></ExpenseItem>
     <ExpenseItem title={expenses[3].title} price={expenses[3].price} date={expenses[3].date} id={expenses[3].id}></ExpenseItem>
    </div>
  );
}

export default App;
