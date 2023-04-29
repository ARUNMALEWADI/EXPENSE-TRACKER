import { useState } from 'react';
import './ExpenseForm.css'
import NewExpenses from './NewExpenses'
import ExpenseItem from './ExpenseItem';

function ExpenseForm()
{   const [enteredtitle,titlefunction]=useState('')
const [enteredamount,amountfunction]=useState('')
const [entereddate,datefunction]=useState('')


   const placetitle=(event)=>{
       titlefunction(event.target.value)
   }
   const placeamount=(event)=>{
    amountfunction(event.target.value)
 
    
}
const placedate=(event)=>{
    datefunction(event.target.value)
   
}





    return <div>
        <form  className='exp'>
    <label>title: </label><input type="text"  onChange={placetitle} ></input>
    <label> date: </label><input type="date" onChange={placedate}></input>
    <label> expense value: </label>
    <input type="text" onChange={placeamount} ></input>
        <button  >Add expense </button>
        
    <br/>
   </form>
   <ExpenseItem amount={Number(enteredamount)} title={enteredtitle} date={new Date(entereddate)}/>
   

    </div>

}
export default ExpenseForm;