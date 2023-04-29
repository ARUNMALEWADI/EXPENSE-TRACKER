import { useState } from 'react';
import './ExpenseForm.css'


//NOTE:COMMENTED THINGS ARE BINDING WITH SINGLE STATE 

function ExpenseForm()
{  //using multiple states
    
    const [title,settitle]=useState('')
    const [amount,setamount]=useState('')
    const[date,setdate]=useState('')


 
//using single state

// const [inputs,setfunction]=useState({
//     enteredtitle:'',
//     entereddate:'',
//     enteredamount:''
// })


   const placetitle=(event)=>{
     settitle(event.target.value)

    //    setfunction((prevState)=>{
    //    return {  ...prevState,
    //         enteredtitle:event.target.value

    //     }
    //    })
   }
   const placeamount=(event)=>{

    setamount(event.target.value)

    // setfunction((prevState)=>{
    //     return {  ...prevState,
    //          enteredamount:event.target.value
 
    //      }
    //     })
 
    
}
const placedate=(event)=>{

     setdate(event.target.value)

    // setfunction((prevState)=>{
    //     return {  ...prevState,
    //          entereddate:event.target.value
 
    //      }
    //     })
   
}
const show=(e)=>{
    e.preventDefault();

    let obj1={amount:amount,
        date:date,
        title: amount
}
console.log(obj1)
setamount('')
setdate('')
settitle('')


    // let obj={amount:inputs.enteredamount,
    //         date:inputs.entereddate,
    //         title: inputs.enteredtitle
    // }
    // console.log(obj);
    // setfunction({
    //     enteredamount:'',
    //     enteredtitle:'',
    //     entereddate:''
    // })
}





    return <div>
        <form  className='exp' onSubmit={show}>
<label>title: </label><input type="text" value={title}  onChange={placetitle} ></input>
    <label> date: </label><input type="date" value={date} onChange={placedate}></input>
    <label> expense value: </label>
    <input type="text" value={amount} onChange={placeamount} ></input>
        <button >Add expense </button>
        
    <br/>
   </form>

    </div>

}
export default ExpenseForm;