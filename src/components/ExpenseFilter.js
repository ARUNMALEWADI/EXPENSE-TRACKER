import React from 'react';
import './ExpenseFilter.css';
import ExpenseItem from './ExpenseItem';

const ExpenseFilter = (props) => {
  



  return (
    <div>
    {<ExpenseItem date={props.date} amount={props.amount} title={props.title}></ExpenseItem>
    
    }
    </div>

  
  );
}

export default ExpenseFilter;