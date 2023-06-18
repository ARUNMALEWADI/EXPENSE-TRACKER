import React,{useState} from 'react';
import Card from './Card';
import './ExpenseDetails.css';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpenseChart';
import NewExpenses from './NewExpenses';

function ExpenseDetails(props) {

  
const [get_year,set_year]=useState("2022")

const select_year=(event)=>{
 set_year(event.target.value);


}

const filtered_expense=props.items.filter((expense)=>{

  return new Date(expense.date).getFullYear().toString()===get_year;

})


  return (
    <Card className="expenses">
         <NewExpenses New_Expense={props.New_Expense}></NewExpenses>
       <select  onChange={select_year} className='selector'>
      <option>2022</option>
      <option>2021</option>
      <option>2020</option>
      <option>2019</option>
    </select>
   
    <ExpensesChart expenses={filtered_expense} />
     
      { filtered_expense.length>0 && filtered_expense.map((i)=>(

        <ExpenseFilter key={i.id} date={i.date} amount={i.amount} title={i.title} ></ExpenseFilter>
        
      ))
      
      
      }
    
      {
          filtered_expense.length===0 && <h2 className='noexpense'>No item found!!</h2>
      }
   
      
    </Card>
  );
}

export default ExpenseDetails;