
import ExpenseDetails from './components/ExpenseDetails';
import NewExpenses from './components/NewExpenses';
import React ,{useState} from 'react';

const oldexpense = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {

  
  const [expenses,addexpense]=useState(oldexpense)

const Get_NewExpense=expense=>
{ expense.id=Math.random()  //added id to newly added expense
console.log(expense); 
addexpense(prevexpense=>{
  return [expense,...prevexpense]

})

}


  return (
    <div>
       <NewExpenses New_Expense={Get_NewExpense}></NewExpenses>
      <ExpenseDetails items={expenses}  />
     
     

    </div>
  );
}

export default App;