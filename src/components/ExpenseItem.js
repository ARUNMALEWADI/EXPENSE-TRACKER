import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
    const del=()=>{
     
        console.log("deleted")
        a.remove();
    }

  return (
    
   
    <div >
    <Card className='expense-item' >
      <ExpenseDate  date={props.date} />
      <div className='expense-item__description'>
        <h2 >{props.title}</h2>
        <div className='expense-item__price'  >{props.amount}</div>
        <button onClick={del}>Delete expense</button>
      </div>
    </Card>
    </div>
  );
}

export default ExpenseItem;



