import React ,{UseState, useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const [amount,setAmount]=useState(props.amount)  
  const change=()=>{
       setAmount('$100')
      console.log(amount);
        
      
    }

  return (
    
   
    <div >
    <Card className='expense-item' >
      <ExpenseDate  date={props.date} />
      <div className='expense-item__description'>
        <h2 >{props.title}</h2>
        <div className='expense-item__price'  >{amount}</div>
        <button onClick={change}>change expense</button>
      </div>
    </Card>
    </div>
  );
}

export default ExpenseItem;



