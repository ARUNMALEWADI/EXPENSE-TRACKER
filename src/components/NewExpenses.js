import React,{useState} from "react";
import ExpenseForm from "./ExpenseForm";
import './ExpenseForm.css';
import './Newexpenses.css'



function NewExpenses(props)
{ const [isediting ,set_editing]=useState(false)

const collect =(fetcheddata) =>{
  const data={
    ...fetcheddata
  }
  props.New_Expense(data);
}
 const show_form =()=>{
  set_editing(true)
 }
 const close_form=()=>{
  set_editing(false)
 }
  
    return   (
    <div className='btns'>
   {    !isediting && <button type="button" id='btn'  onClick={show_form}>Add Expense</button>
        
   }
   {
    isediting && <ExpenseForm send={collect} oncancel={close_form}></ExpenseForm>
   }
  
   
    </div>
    );
}
export default NewExpenses;