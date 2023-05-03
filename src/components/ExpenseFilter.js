import React from 'react';
import './ExpenseFilter.css';
import ExpenseItem from './ExpenseItem';

const ExpenseFilter = (props) => {
  
  let year=new Date(props.date).getFullYear().toString()
  year= Number(year)


  return (
    <div>
    { props.year===year && <ExpenseItem date={props.date} amount={props.amount} title={props.title}></ExpenseItem>
    
    }
    </div>

  
  );
}

export default ExpenseFilter;