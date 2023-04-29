import { useState } from 'react';
import './ExpenseForm.css'

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
const show=(e)=>{
    e.preventDefault();
    let obj={amount:input.enteredamount,
            date:input.entereddate,
            title: input.enteredtitle
    }
    console.log(obj);
}





    return <div>
        <form  className='exp' onSubmit={show}>
    <label>title: </label><input type="text"  onChange={placetitle} ></input>
    <label> date: </label><input type="date" onChange={placedate}></input>
    <label> expense value: </label>
    <input type="text" onChange={placeamount} ></input>
        <button >Add expense </button>
        
    <br/>
   </form>

    </div>

}
export default ExpenseForm;