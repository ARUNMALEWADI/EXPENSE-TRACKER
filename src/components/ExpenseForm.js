import { useState } from 'react';
import './ExpenseForm.css'
import NewExpenses from './NewExpenses'
import ExpenseItem from './ExpenseItem';

function ExpenseForm()
{   const [input,setfunction]=useState({
    enteredtitle:'',
    entereddate:'',
    enteredamount:''
})


   const placetitle=(event)=>{
       setfunction((prevState)=>{
       return {  ...prevState,
            enteredtitle:event.target.value

        }
       })
   }
   const placeamount=(event)=>{
    setfunction((prevState)=>{
        return {  ...prevState,
             enteredamount:event.target.value
 
         }
        })
 
    
}
const placedate=(event)=>{
    setfunction((prevState)=>{
        return {  ...prevState,
             entereddate:event.target.value
 
         }
        })
   
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
   <ExpenseItem amount={Number(input.enteredamount)} title={input.enteredtitle} date={new Date(input.entereddate)}/>
   

    </div>

}
export default ExpenseForm;