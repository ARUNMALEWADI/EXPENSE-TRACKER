import React,{ useState } from 'react';
import './ExpenseForm.css'



//NOTE:COMMENTED THINGS ARE BINDING WITH SINGLE STATE 

function ExpenseForm(props)
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

    let obj1={
        title: title,
        date:date,
        amount:amount
       
       
}
props.send(obj1)

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





    return (<form onSubmit={show} >
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label>Title</label>
            <input
              type='text'
              value={title}
              onChange={placetitle}
          
            />
          </div>
          <div className='new-expense__control'>
            <label>Amount</label>
            <input
              type='number'
              min='0.01'
              step='0.01'
              value={amount}
              onChange={placeamount}
              style={{backgroundColor:"yellow"}}
            />
          </div>
          <div className='new-expense__control'>
            <label>Date</label>
            <input
              type='date'
              min='2019-01-01'
              max='2022-12-31'
              value={date}
              onChange={placedate}
            />
          </div>
          <div className='new-expense__actions'>
          <button type='submit' >Add Expense</button>
          
        </div>
          </div>
      
       
        
     
      </form>
    )

}
export default ExpenseForm;