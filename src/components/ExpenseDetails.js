import React,{useState} from 'react';
import Card from './Card';
import './ExpenseDetails.css';
import ExpenseFilter from './ExpenseFilter';

function ExpenseDetails(props) {

  const [get_year,set_year]=useState(2022)

const select_year=(event)=>{
 set_year(event.target.value);


}



  return (
    <Card className="expenses">
       <select  onChange={select_year}>
      <option>2022</option>
      <option>2021</option>
      <option>2020</option>
      <option>2019</option>
    </select>
   

      { props.items.map((i)=>(
        <ExpenseFilter key={i.id} date={i.date} amount={i.amount} title={i.title} year={get_year}></ExpenseFilter>
        
      ))


      }
      
    </Card>
  );
}

export default ExpenseDetails;